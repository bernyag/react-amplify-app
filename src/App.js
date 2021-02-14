import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>Delta Tech</code>.
        </p>
        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1abZqn7s7Uuc6yCIWQLAChHV1Qj4nSe-j37h6LT9xiOo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creators: Bernardo Altamirano & Adrián Álvarez.
        </a>
      </header>
    </div>
  );
}

export default App;
