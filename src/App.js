import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
      <div className="App">
        <div><Header></Header></div>
        <div className="main">main page</div>
        <div><Footer></Footer></div>
      </div>
  );
}

export default App;
