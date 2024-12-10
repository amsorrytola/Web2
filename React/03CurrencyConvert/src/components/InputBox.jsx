import React from 'react';

function InputBox({ id, amount, currency, onAmountChange, onCurrencyChange, currencyData }) {
  return (
    <div className="input-box">
      <label htmlFor={id}>{id}</label>
      <input
        type="number"
        id={id}
        value={amount}
        onChange={(e) => onAmountChange(parseFloat(e.target.value) || 0)}
        
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
    
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
