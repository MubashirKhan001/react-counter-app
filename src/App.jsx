import CounterApp from "./CounterApp"
function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 ">
      <h1 className="text-purple-700 font-extrabold text-3xl mb-6 max-[321px]:text-2xl">REACT-COUNTER-APP!</h1>
      <br />
      <CounterApp />
    </div>
  )
}

export default App
