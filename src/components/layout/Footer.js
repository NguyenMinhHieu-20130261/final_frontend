import React from 'react';
import icon from "./icon/newspaper.png";
import {Link} from "react-router-dom";
const FooterTop = () => {
  return(
      <div className="footer-area footer-padding fix">
          <div className="container">
              <div className="row d-flex justify-content-between">
                  <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                      <div className="single-footer-caption">
                          <div className="single-footer-caption">
                              <div className="footer-logo">
                                  <Link to={"/home"}>
                                      <div>
                                          <p> Báo Ba Hawst</p>
                                      </div>
                                  </Link>
                              </div>
                              <div className="footer-tittle">
                                  <div className="footer-pera">
                                      <p>Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus
                                          tempor da blandit gravida sodales Suscipit mauris pede for con sectetuer
                                          sodales adipisci for cursus fames lectus tempor da blandit gravida sodales
                                          Suscipit mauris pede for sectetuer.</p>
                                  </div>
                              </div>
                              <div className="footer-social">
                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                  <a href="#"><i className="fab fa-instagram"></i></a>
                                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6">
                      <div className="single-footer-caption mt-60">
                          <div className="footer-tittle">
                              <h4>Newsletter</h4>
                              <div className="footer-form">
                                  <div id="mc_embed_signup">
                                      <ul>
                                          <li><a className="footer-tag"><p>Mới nhất</p></a></li>
                                          <li><a className="footer-tag"><p>Mới nhất</p></a></li>
                                          <li><a className="footer-tag"><p>Mới nhất</p></a></li>
                                          <li><a className="footer-tag"><p>Mới nhất</p></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                      <div className="single-footer-caption mb-50 mt-60">
                          <div className="footer-tittle">
                              <h4>Instagram Feed</h4>
                          </div>
                          <div className="instagram-gellay">
                              <ul className="insta-feed">
                                  <li><a href="#"><div> test</div></a></li>
                                  <li><a href="#"><div> test</div></a></li>
                                  <li><a href="#"><div> test</div></a></li>
                                  <li><a href="#"><div> test</div></a></li>
                                  <li><a href="#"><div> test</div></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
const FooterBottom = () => {
  return(
      <div className="footer-bottom-area">
          <div className="container">
              <div className="footer-border">
                  <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-6">
                          <div className="footer-copy-right">

                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="footer-menu f-right">
                              <ul>
                                  <li><a href="#">Terms of use</a></li>
                                  <li><a href="#">Privacy Policy</a></li>
                                  <li><a href="#">Contact</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
export const Footer = () => {
    return (
        <footer>
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </footer>
    );
};
