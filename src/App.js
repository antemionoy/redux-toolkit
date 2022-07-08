import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './slices/counterSlice';
//tasks
import NewTaskForm from './components/NewTaskForm.js';
import Tasks from './components/Tasks.js';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <div>
          <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
          >
            Прибавить
          </button>
          <span>{count}</span>
          <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
          >
            Отнять
          </button>
        </div>
      </div>
      <NewTaskForm />
      <Tasks />
    </div>
  );
}

export default App;
