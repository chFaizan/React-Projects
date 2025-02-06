import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
    };
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/service", label: "Service" },
        { path: "/about", label: "About" },
        { path: "/blogs", label: "Blog" },
        { path: "/contact", label: "Contact" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="navbar">
            <nav className="navbar__container">
                <a href="/" className="navbar__logo">
                    Blog<span className="logo-highlight">PK</span>
                </a>

                <ul className="navbar__list">
                    {navItems.map(({ path, label }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `navbar__link ${isActive ? 'active' : ''}`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="navbar__socials">
                    <a href="/" className="social-link">
                        <FaFacebook />
                    </a>
                    <a href="/" className="social-link">
                        <FaDribbble />
                    </a>
                    <a href="/" className="social-link">
                        <FaTwitter />
                    </a>
                    <button onClick={handleLogout} className="login-button">
                        <Link to="/" >Logout</Link>
                    </button>


                </div>

                <div className="mobile-menu-button">
                    <button onClick={toggleMenu} className="cursor-pointer">
                        {menuOpen ?
                            <FaTimes className="mobile-menu-icon" /> :
                            <FaBars className="mobile-menu-icon" />
                        }
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
                <ul className="mobile-menu-list">
                    {navItems.map(({ path, label }) => (
                        <li key={path} className="mobile-menu-link">
                            <NavLink
                                onClick={toggleMenu}
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;