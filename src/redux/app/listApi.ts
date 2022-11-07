import axios from 'axios';

export type ListItem = {
  id: string;
  name: string;
  avatar: string;
  job: string;
  description: string;
};

export const listApi = (): Promise<Array<ListItem>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        'https://5fc9346b2af77700165ae514.mockapi.io/simpsons'
      );

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
