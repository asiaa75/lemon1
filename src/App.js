import './App.css';

function App() {
  return (
    <nav>
      <header>
      Homepage
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul>
            <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/">Reservation</Link></li>
              <li><Link to="/">Order online</Link></li>
              <li><Link to="/">Login</Link></li>
          </ul>
          Learn React
        </a>
      </header>
       <main className="Home">
        <h1>Little Lemon</h1>
        <p>About us</p>
        <button>Little Lemon</button>
      </main>
      <footer className="site-footer">
        <p>2026 Little Lemon.</p>
      </footer>
    </nav>
  );
}

export default App;
