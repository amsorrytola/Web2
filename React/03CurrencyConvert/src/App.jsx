import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import InputBox from './components/InputBox';

function App() {
  const [amounts, setAmounts] = useState({ from: 0, to: 0 });
  const [currencies, setCurrencies] = useState({ from: 'USD', to: 'INR' });


  const currencyData = useFetch();

  
  const handleConversion = (type, value, currency) => {
    if (!currencyData) return;

    if (type === 'from') {
      const convertedValue = value * (currencyData[currencies.to] / currencyData[currency]);
      setAmounts({ ...amounts, from: value, to: convertedValue });
    } else {
      const convertedValue = value * (currencyData[currency] / currencyData[currencies.from]);
      setAmounts({ ...amounts, from: convertedValue, to: value });
    }
    setCurrencies({ ...currencies, [type]: currency });
  };

  return (
    <div>
      <h1 >Currency Converter</h1>
      <InputBox
        id="From"
        amount={amounts.from}
        currency={currencies.from}
        onAmountChange={(value) => handleConversion('from', value, currencies.from)}
        onCurrencyChange={(currency) => handleConversion('from', amounts.from, currency)}
        currencyData={currencyData}
      />
      <hr />
      <InputBox
        id="To"
        amount={amounts.to}
        currency={currencies.to}
        onAmountChange={(value) => handleConversion('to', value, currencies.to)}
        onCurrencyChange={(currency) => handleConversion('to', amounts.to, currency)}
        currencyData={currencyData}
      />
    </div>
  );
}

export default App;
