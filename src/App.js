import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch(actions.Increment());
  };

  const Decrement = () => {
    dispatch(actions.Decrement())
  };

  const AddBy = () => {
    dispatch(actions.AddBy(10))
  };
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
      <button onClick={AddBy}>Add 10</button>
    </div>
  );
}

export default App;
