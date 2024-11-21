import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp';

import store from './store';
import Counter from './Counter';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
        <Counter />
    </Provider>
    // <div className="App">
    // <TodoApp />
    // </div>
  );
}

export default App;
