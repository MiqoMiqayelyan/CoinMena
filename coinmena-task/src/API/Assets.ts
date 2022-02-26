import axios from 'axios';

type paramsType = {
    limit: number,
    sort?: string,
}

export const fetchListWithParams = async (requestParams: paramsType) => {
  const { data } = await axios.get('https://data.messari.io/api/v1/assets', { params: { ...requestParams } });

  return data;
};
