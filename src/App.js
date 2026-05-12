import App from "./App.css";
import HomePage from "./HomePage.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import BookingForm from "./BookingForm.js"

function App() {
  return (
    <nav className="container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </nav>
  );
}

export default App;
