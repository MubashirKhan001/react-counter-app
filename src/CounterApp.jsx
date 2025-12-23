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
            <div className="bg-white min-w-55 min-h-20 items-center flex justify-center text-3xl rounded text-red-500 font-bold">{counter}</div>
            <div className="flex gap-x-2">
                <button onClick={counterIncrease} className="cursor-pointer bg-white text-red-500  py-2 px-3 font-bold rounded">Increment</button>
                <button onClick={counterDecrease} disabled={counter === 0} className="cursor-pointer bg-white text-red-500 px-3 py-2 font-bold rounded">Decrement</button>
            </div>
            <div>
                <button onClick={resetCounter} className="cursor-pointer bg-white text-red-500  py-2 px-10 font-bold rounded">Reset</button>
            </div>
        </div>
    )

};
export default CounterApp;