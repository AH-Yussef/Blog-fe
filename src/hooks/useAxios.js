import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

const useAxios = (url, method, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  url = `http://localhost:3000/api/v1${url}`;

  const operation = async () => {
    try {
      const response = await axios.request({
        data: payload,
        method,
        url,
      });

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };

  return { data, error, loading, operation };
};

export default useAxios