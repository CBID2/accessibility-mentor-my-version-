import React from "react";
import Image from "next/image";
import logo from '../../stories/assets/logo.png';


const Footer = () => {
    return (
        <footer style={{ width: "100%", position: "fixed", bottom: "0"}}>
            <Image src={logo} alt="footer-logo" width={100} height={100}/>
            <p className="copyright"> AccessibilityMentor 2023. All rights reserved.</p>
        </footer>
    );
};

export default Footer;