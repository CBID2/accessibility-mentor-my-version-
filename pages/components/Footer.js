import React from "react";
import Image from "next/image";
import logo from '../../../assets/logo.png';


const Footer = () => {
    return (
        <footer style={{ width: "100%", position: "relative", bottom: "0"}}>
            <Image src={Logo} alt="footer-logo"></Image>
        </footer>
    );
};

export default Footer;