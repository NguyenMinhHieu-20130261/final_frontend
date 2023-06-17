import React, {useState} from "react";

export const BackToTop = () =>{
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisibility);

    return (
        <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <i className="fa fa-chevron-up"></i>
        </div>
    );
}