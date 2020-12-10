import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <div className="nav-wrapper">
            <nav className="nav">

                    <a className="home nav-links" href="/home">home</a>
                    <a className="about nav-links" href="/about">about</a>
                    <a className="testimonial nav-links" href="/testimonials">testimonials</a>
                    <a className="services nav-links" href="/services">services</a>
                    <a className="contact-me nav-links" href="/contact">contact me</a>

               
                <ul className="social-links">
                    <a href="mailto:cgsaldanasbd@gmail.com">
                    <li className="social-link mail">
                    </li>
                    </a>

                    <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/cristiannoh15?igshid=3zk51vyuwd2k">
                    <li className="social-link instagram" ></li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;