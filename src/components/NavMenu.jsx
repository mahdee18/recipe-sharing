import React, { useState } from "react";
import PropTypes from "prop-types";

const routes = [
    { name: "Home", href: "#", isActive: true },
    { name: "Services", href: "#", isActive: false },
    { name: "Why us?", href: "#", isActive: false },
    { name: "How It Works", href: "#", isActive: false },
    { name: "Features", href: "#", isActive: false },
    { name: "Testimonials", href: "#", isActive: false },
];

const NavMenu = ({ routes }) => (
    <>
        {routes.map((route, i) => (
            <li key={i}>
                <a
                    className={`px-4 ${route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                        }`}
                    href={route.href}
                >
                    {route.name}
                </a>
            </li>
        ))}
    </>
);

NavMenu.propTypes = {
    routes: PropTypes.array.isRequired,
};

const AuthNavMenu = () => (
    <>
        <li>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-1.5 px-4 rounded">
                Sign In
            </button>
        </li>
    </>
);

export const Navigation2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="ezy__nav2 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
            <nav>
                <div className="container px-4">
                    <div className="flex justify-between items-center">
                        <a className="font-black text-3xl" href="#!">
                            Easy Frontend
                        </a>
                        <button
                            className="block lg:hidden cursor-pointer h-10 z-20"
                            type="button"
                            id="hamburger"
                            onClick={toggleMenu}
                        >
                            <div className={`h-0.5 w-7 bg-black dark:bg-white mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                            <div className={`h-0.5 w-7 bg-black dark:bg-white mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                            <div className={`h-0.5 w-7 bg-black dark:bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                        </button>
                        <ul
                            className={`flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 ${isMenuOpen ? 'left-0' : 'left-full'} lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent transition-all duration-300`}
                            id="navbar"
                        >
                            <NavMenu routes={routes} />
                            <AuthNavMenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
