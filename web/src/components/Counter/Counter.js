import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const countUp = { type: 'COUNT_UP' }
  const countDown = { type: 'COUNT_DOWN' }
  const resetCount = { type: 'SET_COUNT', value: 0 }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(countUp)}>Count Up</button>
      <button onClick={() => dispatch(countDown)}>Count Down</button>
      <button onClick={() => dispatch(resetCount)}>Reset Count</button>
    </div>
  )
}

export default Counter
