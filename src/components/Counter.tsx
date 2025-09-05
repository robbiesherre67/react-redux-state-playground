import { useAppDispatch, useAppSelector } from '../app/hooks';
import { increment, decrement, addBy, reset } from '../features/counter/counterSlice';

export default function Counter() {
  const value = useAppSelector(s => s.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <h3>Redux Counter: {value}</h3>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(addBy(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}