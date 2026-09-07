import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, reset, incrementByAmount} from './Feautures/Counter/counterSlice'
import { useState } from 'react'

function App() {

  const [amount, setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleResetClick() {
    dispatch(reset())
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(Number(amount)))
  }

  return (
    <div className="app">

      <h1>Counter</h1>

      <div className="counter-controls">
        <button onClick={handleDecrementClick}>−</button>

        <p>{count}</p>

        <button onClick={handleIncrementClick}>+</button>
      </div>

      <button className="reset-btn" onClick={handleResetClick}>Reset</button>

      <div className="amount-section">

        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="add-btn"  onClick={handleIncAmountClick}>Add Amount</button>
      </div>
    </div>
  )
}

export default App