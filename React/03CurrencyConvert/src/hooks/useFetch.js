import { useEffect, useState } from 'react';

function useFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/73d430ffa322bb14c1d35686/latest/USD');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result.conversion_rates);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCurrencyData();
  }, []);

  return data;
}

export default useFetch;
