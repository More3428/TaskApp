import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To-Do s
        </p>
      </header>
      <div>
        <header className="Main-header">
        <TodoList />
        </header>
      </div>
    </div>

  );
}

export default App;
