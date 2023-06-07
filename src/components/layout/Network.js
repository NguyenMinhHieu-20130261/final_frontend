import React from 'react';
import '../../assets/css/layout/network.css'
import '../../assets/css/main.css'
export default function Network() {
    return (
        <div id="network">
            <div className="center-wrapper">
                <div className="left">Sunday, August 2, 2009 <span className="text-separator">|</span> <span
                    className="quiet">794 users online</span>
                </div>
                <div className="right">
                    <ul className="tabbed" id="network-tabs">
                        <li className="current-tab"><a href="#">Simple Magazine</a></li>
                        <li><a href="#">Network site</a></li>
                        <li><a href="#">Network site 2</a></li>
                    </ul>
                    <div className="clearer">&nbsp;</div>
                </div>
                <div className="clearer">&nbsp;</div>
            </div>
        </div>
    );
};
