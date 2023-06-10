
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Home} from "./components/MainPage";

function App() {
  return (
      <div className="App">
        <div id="site">
            <div className="center-wrapper">
                <Header/>
                <Home></Home>
                <Footer/>
            </div>
        </div>
      </div>
  );
}

export default App;
