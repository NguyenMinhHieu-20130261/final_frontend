import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Outlet} from "react-router";

function App() {
  return (
      <div className="App">
        <div id="site">
            <div className="center-wrapper">
                {/*<Header/>*/}
                <Outlet/>
                {/*<Footer/>*/}
            </div>
        </div>
      </div>
  );
}

export default App;
