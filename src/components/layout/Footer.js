import React from 'react';

const Footer = () => {
    return (
        <div id="footer">
            <div className="left">&copy; 2003-2009 Simple Magazine <span className="text-separator">&rarr;</span> <a
                href="#">Home</a> <span className="text-separator">|</span><a href="#">News</a> <span
                className="text-separator">|</span> <a href="#">Politics</a> <span className="text-separator">|</span>
                <a href="#">Culture</a> <span className="text-separator">|</span> <a href="#">Sport</a> <span
                    className="text-separator">|</span> <a href="#">Debate</a> <span className="text-separator">|</span>
                <a href="#">Entertainment</a></div>
            <div className="right"><a href="">Website template</a> by <a
                href="">Arcsin</a></div>
            <div className="clearer">&nbsp;</div>
        </div>
    );
};

export default Footer;