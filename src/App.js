import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch({type: 'INC'});
  };

  const Decrement = () => {
    dispatch({type: 'DEC'})
  };
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
    </div>
  );
}

export default App;
