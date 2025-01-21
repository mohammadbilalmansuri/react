import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-white-200 bg-[#ffffff80] border-2 rounded-xl p-6 flex flex-col gap-5 relative"
    >
      <InputBox
        label="From"
        amount={amount}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setFrom(currency)}
        currencyOptions={options}
        selectCurrency={from}
        placeholder={1}
      />
      <button
        type="button"
        onClick={swap}
        className="bg-blue-700 absolute py-1 px-3  left-[198px] top-[124px] rounded-lg border-[3px] border-white hover:bg-teal-700 transition-all duration-200"
      >
        Swap
      </button>

      <InputBox
        label="To"
        amount={convertedAmount}
        onCurrencyChange={(currency) => setTo(currency)}
        currencyOptions={options}
        selectCurrency={to}
        amountDisable={true}
        placeholder={currencyInfo[to]}
      />
      <button
        onClick={convert}
        type="submit"
        className="bg-blue-700 rounded-lg p-3 transition-all duration-200 hover:bg-teal-700"
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </form>
  );
}

export default App;
