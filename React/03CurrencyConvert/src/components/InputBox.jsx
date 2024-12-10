import React from 'react';

function InputBox({ id, amount, currency, onAmountChange, onCurrencyChange, currencyData }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <label
        htmlFor={id}
        className="text-xl font-semibold tracking-wider text-indigo-400"
      >
        {id}
      </label>
      <input
        type="number"
        id={id}
        value={amount}
        onChange={(e) => onAmountChange(parseFloat(e.target.value) || 0)}
        className="w-full max-w-lg p-3 rounded-lg bg-gray-800 text-indigo-400 text-lg font-bold border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="w-full max-w-lg p-3 rounded-lg bg-gray-800 text-indigo-400 text-lg font-bold border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
      >
        {currencyData &&
          Object.keys(currencyData).map((currencyKey) => (
            <option key={currencyKey} value={currencyKey}>
              {currencyKey}
            </option>
          ))}
      </select>
    </div>
  );
}

export default InputBox;
