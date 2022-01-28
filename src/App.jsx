import './App.css';
import CountdownTimer from "./components/CountdownTimer"

function App() {
  return (
    <div className="App">
      <CountdownTimer countdownTimestampMs={1643673600000} />
    </div>
  )
}

export default App
