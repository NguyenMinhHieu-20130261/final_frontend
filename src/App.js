import Header from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";
import {Outlet} from "react-router";
// import './components/assets/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css';
import './components/assets/css/bootstrap.min.css';
// import './components/assets/css/owl.carousel.min.css';
import './components/assets/css/ticker-style.css';
import './components/assets/css/flaticon.css';
import './components/assets/css/slick.css';
import './components/assets/css/animate.min.css';
import './components/assets/css/magnific-popup.css';
import './components/assets/css/fontawesome-all.min.css';
import './components/assets/css/themify-icons.css';
import './components/assets/css/slick.css';
import './components/assets/css/nice-select.css';
import './components/assets/css/style.css';
import './components/assets/css/responsive.css';
import './components/assets/img/news/icon-fb.png'
import './components/assets/img/news/icon-tw.png'
import './components/assets/img/news/icon-ins.png'
import './components/assets/img/news/icon-yo.png'

function App() {
  return (
      <div className="App">
        <div id="site">
            <div className="center-wrapper">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
      </div>
  );
}

export default App;
