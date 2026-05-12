import "./Main.css";

function Main() {
    return (
<main>
      <article>
        <h1>O Little Lemon</h1>
        <p>Informacje o restauracji.</p>
      </article>

      <article>
        <h2>Specjalność</h2>
        <p>This weeeks spesials</p>
      </article>
      
      <button className="cta-btn">
        Login
      </button>
      <Routes> 
    <Route path="/" element={<HomePage />}></Route>
</Routes>

    </main>
  );
}

export default Main;