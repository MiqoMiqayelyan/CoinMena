/* eslint-disable dot-notation */
import { useQuery } from 'react-query';
import axios from 'axios';

import Table from '../../Components/Table';
import Button from '../../Components/Button';

type responseTypes = {
  id: string,
  name: string,
  metrics: {
    market_data: {
      price_usd: number
    }
  }
}
// TODO move API request to another folder
const fetchList = async () => {
  const { data } = await axios.get('https://data.messari.io/api/v1/assets', { params: { limit: 10 } });

  return data;
};
// TODO create field file
const fieldsForHeader = [
  {
    name: 'name',
    label: 'Product Name',
  },
  {
    name: 'metrics',
    label: 'Price',
  },
  {
    name: 'actionButtons',
    label: 'Action',
    hasAction: true,
  },
];

const Home = () => {
  const {
    data,
  } = useQuery('posts', fetchList);

  const fieldsForBody = data?.data?.map((response: responseTypes) => {
    const { name } = response;
    const price = response?.metrics?.market_data?.price_usd;

    return ({
      name,
      price,
      actions: <button type="button">AA</button>, // TODO create select component
    });
  });

  return (
    <div>
      <Table fieldsForHeader={fieldsForHeader} fieldsForBody={fieldsForBody} />
    </div>
  );
};

export default Home;
