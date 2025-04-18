import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const info = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]))
      .then((error) => {
        if (error) {
          console.log(response);
        }
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
