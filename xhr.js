import axios from 'axios';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`http://localhost:3000/${endpoint}`);

    console.log('status: ', response.status);
    console.log('server: ', response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
