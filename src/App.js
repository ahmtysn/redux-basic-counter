import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,login} from './actions';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="App">
          <h1>Learn Redux</h1>
          <button onClick={() => dispatch(increment(3))}>+</button>
          <button onClick={() => dispatch(decrement(3))}>-</button>
          <p>Counter: {counter}</p>
            {!isLogged && <button onClick={() => dispatch(login())}>See Information with Login</button>}
            {isLogged ?
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda atque commodi
                distinctio illo illum laudantium magni, molestias non pariatur possimus provident quaerat quasi
                reprehenderit tempora tempore totam, ullam velit.
                </h3> : ''}
        </div>
      );
}

export default App;
