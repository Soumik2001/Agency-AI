
import assets from '../assets/assets'
import { FaArrowRight } from "react-icons/fa6";
import Button from "./ui/WebsiteButton";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { useState, useEffect } from 'react';
import ThemeToggleBtn from './ui/ThemeToggleBtn';
import { Link } from 'react-scroll';

const Navbar = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const updateOffset = () => {
            setOffset(window.innerWidth < 768 ? -60 : 0);
        };
        updateOffset();
        window.addEventListener('resize', updateOffset);
        return () => window.removeEventListener('resize', updateOffset);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!localStorage.getItem('theme')) {
            setTheme(preferDarkMode ? 'dark' : 'light');
        }
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl shadow-lg"
                : "bg-transparent backdrop-blur-0"
                }`}
        >
            <div className='max-w-[1600px] mx-auto flex justify-between items-center py-5 px-5 md:px-12 lg:px-24 xl:px-40'>

                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={offset}
                    onClick={() => setSidebarOpen(false)}>
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-36 md:w-50 hover:cursor-pointer' alt="Logo" />
                </Link>

                <div className={`text-gray-700 dark:text-white lg:text-base ${!sidebarOpen ? 'max-lg:w-0 overflow-hidden' : 'max-lg:w-60 max-lg:pl-10'} max-lg:fixed top-0 bottom-0 right-0 max-lg:min-h-screen max-lg:h-full max-lg:flex-col max-lg:bg-primary max-lg:text-white max-lg:pt-20 flex lg:items-center gap-5 transition-all z-[99]`}>
                    <IoClose
                        size={28}
                        className="text-white absolute top-5 right-4 lg:hidden cursor-pointer"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={offset}
                        onClick={() => setSidebarOpen(false)}
                        className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </Link>
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        offset={offset}
                        onClick={() => setSidebarOpen(false)}
                        className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Services
                    </Link>
                    <Link
                        to="our-work"
                        smooth={true}
                        duration={500}
                        offset={offset}
                        onClick={() => setSidebarOpen(false)}
                        className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Our Work
                    </Link>
                    <Link
                        to="team"
                        smooth={true}
                        duration={500}
                        offset={offset}
                        onClick={() => setSidebarOpen(false)}
                        className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Our Team
                    </Link>
                    <Link
                        to="contact-us"
                        smooth={true}
                        duration={500}
                        offset={offset}
                        onClick={() => setSidebarOpen(false)}
                        className="relative inline-block cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className='flex items-center gap-2 md:gap-7'>
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                    <IoReorderThree size={30} style={theme === 'dark' ? { color: "#fff" } : { color: "#000" }} onClick={() => setSidebarOpen(true)} className='lg:hidden' />
                    <div className='max-lg:hidden flex items-center justify-center'>
                        <Link
                            to="contact-us"
                            smooth={true}
                            duration={500}
                            offset={offset}
                            onClick={() => setSidebarOpen(false)}><Button icon={<FaArrowRight size={15} />} >Contact Us</Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar