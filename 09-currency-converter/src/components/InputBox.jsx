import React from "react";
// import { useId } from 'react'}

function InputBox({
  className = "",
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  placeholder = "Amount",
}) {
  return (
    <div className={`flex gap-4 bg-white p-5 rounded-xl ${className}`}>
      <div className="flex flex-col gap-1">
        <label htmlFor="amount-input" className="font-bold text-gray-400">
          {label}
        </label>
        <input
          type="number"
          value={amount}
          id="amount-input"
          disabled={amountDisable}
          placeholder={placeholder}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="px-3 w-[300px] h-10 bg-slate-100 rounded outline-none text-slate-800 font-semibold"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="select-currency" className="font-bold text-gray-400">
          Currency
        </label>
        <select
          id="select-currency"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          class="w-20 h-10 bg-slate-100 rounded outline-none text-[14px] font-semibold text-slate-800 uppercase"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
