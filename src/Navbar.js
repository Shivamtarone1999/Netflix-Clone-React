import React, { useEffect, useState } from 'react'

import './Navbar.css';

function Navbar() {

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav__logo"
                // src="https://pngimg.com/uploads/netflix/netflix_PNG4.png"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Felix Logo"
            />

            {/* <img
                className="nav__logo"
                src="https://www.pngfind.com/pngs/m/80-804949_profile-icon-for-the-politics-category-circle-hd.png"
                alt="Felix Logo"
            /> */}

        </div>
    )
}

export default Navbar
