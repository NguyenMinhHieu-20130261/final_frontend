
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PostColumn from "./components/MainPage";
import Network from "./components/layout/Network";
import '../src/assets/css/main.css'

function App() {
  return (
      <div className="App">
          <Network/>
        <div id="site">
            <div className="center-wrapper">
                <Header/>
                <Footer/>
            </div>
        </div>
      </div>
  );
}

export default App;
