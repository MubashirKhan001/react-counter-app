import { useState } from "react";
function CounterApp() {
    const [counter, setCounter] = useState(0);

    const counterIncrease = () => {
        setCounter(counter + 1)
    };
    const counterDecrease = () => {
        setCounter(counter - 1)
    };
    const resetCounter = () => {
        setCounter(0)
    };

    return (
        <div className="flex flex-col justify-center items-center gap-y-6">
            <div className="bg-white min-w-80 min-h-25 items-center flex justify-center text-4xl rounded text-purple-600 font-bold shadow-lg border-4 border-gray-600 max-[321px]:min-w-70">{counter}</div>
            <div className="flex gap-x-2 max-[321px]:gap-x-1">
                <button onClick={counterIncrease} className="bg-purple-600 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 shadow">Increment</button>
                <button onClick={counterDecrease} disabled={counter === 0} className="bg-purple-600 
                text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 shadow
                disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">Decrement</button>
                <button onClick={resetCounter} className="bg-purple-600  cursor-pointer text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-200 shadow">Reset</button>
            </div>
        </div>
    )

};
export default CounterApp;