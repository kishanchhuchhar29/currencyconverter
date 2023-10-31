import { useState } from 'react'
import  InputBox  from './component/InputBox'
import useCurrencyinfo from './hook/Hook'
import './App.css'

function App() {
  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertamount, setConvertamount] = useState(0);
  const Curremcyinfo = useCurrencyinfo(from);
  const option = Object.keys(Curremcyinfo);
  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertamount(amount);
    setamount(convertamount);
  }
  const convert = () => {
    setConvertamount(amount * Curremcyinfo[to]);
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/18491095/pexels-photo-18491095/free-photo-of-st-paul-s-cathedral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currentOption={option}
                onCurrencyChange={(currency)=>setamount(amount)}
                selectCurrency={from}
                onAmountChange={(amount)=>setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertamount}
                currentOption={option}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
