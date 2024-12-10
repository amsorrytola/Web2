import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import InputBox from './components/InputBox';

function App() {
  const [amounts, setAmounts] = useState({ from: 0, to: 0 });
  const [currencies, setCurrencies] = useState({ from: 'USD', to: 'INR' });

  const currencyData = useFetch();

  // Random color generator for animating text
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4 space-y-8">
      <h1
        className="text-4xl font-extrabold text-center transition-colors duration-500"
        style={{ color: generateRandomColor() }}
      >
        Currency Converter
      </h1>

      <InputBox
        id="From"
        amount={amounts.from}
        currency={currencies.from}
        onAmountChange={(value) => handleConversion('from', value, currencies.from)}
        onCurrencyChange={(currency) => handleConversion('from', amounts.from, currency)}
        currencyData={currencyData}
      />

      <div className="w-full max-w-lg h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>

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
