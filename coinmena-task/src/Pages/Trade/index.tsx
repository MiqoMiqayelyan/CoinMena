import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import Button from '../../Components/Button';

import './style.css';

type InputType = {
    value: number | string,
    options: {
        value: string,
        label: string,
    }[]
}

const getCoins = async (base: string) => {
  const { data } = await axios.get('https://api.exchangerate.host/latest', { params: { base } });

  return data;
};

const currency = [{
  value: 'USD',
  label: 'USD',
},
{
  value: 'EUR',
  label: 'EUR',
}];
// !!SORRY for this type of code, I know this is very bad code.
// I didn't have much time, I hope you understand
const Trade = () => {
  const {
    data,
    isLoading,
  } = useQuery(
    'currency',
    async () => await getCoins('USD'),
  );

  const [isSwapped, setIsSwapped] = useState(false);
  const [usdValue, setUsdValue] = useState<InputType>({
    value: 0,
    options: currency,
  });
  const [coinValue, setCoinValue] = useState<InputType>({
    value: 0,
    options: [],
  });
  const [selectedCoin, setSelectedCoin] = useState('');

  const mutateOptions = (state: InputType, selectOption: InputType['options']) => ({
    ...state,
    options: selectOption,
  });

  useEffect(() => {
    if (isLoading) return;

    const getRates = Object.keys(data.rates);
    const selectOption = getRates?.map((item) => ({
      value: item,
      label: item,
    }));

    if (isSwapped) {
      setUsdValue((state) => mutateOptions(state, selectOption));
    } else {
      setCoinValue((state) => mutateOptions(state, selectOption));
    }

    // add first coin value
    if (!selectedCoin) {
      setSelectedCoin(getRates[0]);
    }
  }, [isLoading]);

  const onSwap = useCallback(() => {
    setIsSwapped((state) => !state);
  }, []);

  const calculateValues = (value: number | string, coinKey: string) => {
    const coinName = coinKey || selectedCoin;
    const getCurrenCoinValue = data.rates[coinName];
    const calculate = (Number(value) * getCurrenCoinValue).toFixed(2);

    setCoinValue((state) => ({
      ...state,
      value: calculate,
    }));
  };

  const handleCurrencyChange = (value: number) => {
    setUsdValue((state) => ({
      ...state,
      value,
    }));
    calculateValues(value, selectedCoin);
  };

  const handleSelectedChange = (key: string) => {
    setSelectedCoin(() => key);
    calculateValues(usdValue.value, key);
  };

  const container = () => [
    <Input onChange={handleCurrencyChange} inputValue={usdValue.value} type="number">
      <Select options={usdValue.options} />
    </Input>,
    <Input inputValue={coinValue.value} type="number">
      <Select onChange={handleSelectedChange} options={coinValue.options} />
    </Input>,
  ];

  return !isLoading
    ? (
      <form className="trade-component">
        {isSwapped ? container().reverse() : container()}
        <Button onButtonClick={onSwap}> Swap</Button>
      </form>
    ) : <div className="loader">...LOADING</div>;
};

export default Trade;
