import React from 'react';
import '../../assets/css/layout/footer.css'
import '../../assets/css/main.css'
const Footer = () => {
    return (
        <div id="footer">
            <div className="left">&copy; 2003-2009 Simple Magazine <span className="text-separator">&rarr;</span> <a
                href="#">Home</a>
                <span className="text-separator">|</span><a href="#">News</a> <span className="text-separator">|</span>
                <a
                    href="#">Politics</a> <span className="text-separator">|</span> <a href="#">Culture</a> <span
                    className="text-separator">|</span> <a href="#">Sport</a> <span className="text-separator">|</span>
                <a
                    href="#">Debate</a> <span className="text-separator">|</span> <a href="#">Entertainment</a></div>
            <div className="right"><a href="http://templates.arcsin.se/">Website template</a> by <a
                href="http://arcsin.se/">Arcsin</a></div>
            <div className="clearer">&nbsp;</div>
        </div>
    );
};

export default Footer;