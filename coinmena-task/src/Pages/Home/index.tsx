/* eslint-disable no-return-await */
/* eslint-disable camelcase */
import { useQuery } from 'react-query';

import { useEffect, useState } from 'react';
import Table from '../../Components/Table';
import Select from '../../Components/Select';

import { fetchListWithParams } from '../../API/Assets';

type responseTypes = {
  id: string,
  name: string,
  serial_id: number,
  metrics: {
    market_data: {
      price_usd: number
    }
  }
}

// TODO create field file
const fieldsForHeader = [
  {
    name: 'serialId',
    label: 'Id',
  },
  {
    name: 'name',
    label: 'Name',
    sortable: true,
    sortBy: 'name',
  },
  {
    name: 'metrics',
    label: 'Price',
    sortable: true,
    sortBy: 'price',
  },
  {
    name: 'actionButtons',
    label: 'Action',
    hasAction: true,
  },
];

const selectOptions = [
  {
    value: 'Buy',
    label: 'Buy',
  },
  {
    value: 'Sell',
    label: 'Sell',
  },
];

const Home = () => {
  const [sortingValue, setSortingValue] = useState('');
  const {
    data,
    refetch,
  } = useQuery(
    'posts',
    // sorting is not working , need understood sort value for request
    async () => await fetchListWithParams({ limit: 10, sort: sortingValue }),
  );

  const fieldsForBody = data?.data?.map((response: responseTypes) => {
    const { name, serial_id } = response;
    const price = response?.metrics?.market_data?.price_usd;

    return ({
      serial_id,
      name,
      price,
      actions: <Select options={selectOptions} />,
    });
  });

  const handleSortClick = (value: string) => {
    setSortingValue(value);
  };

  useEffect(() => {
    if (sortingValue !== '') {
      refetch();
    }
  }, [sortingValue]);

  return (
    <div>
      <Table
        onSortClick={handleSortClick}
        fieldsForHeader={fieldsForHeader}
        fieldsForBody={fieldsForBody}
      />
    </div>
  );
};

export default Home;
