
import assets from '../assets/assets'
import { FaArrowRight } from "react-icons/fa6";
import Button from './ui/Button';
import { IoClose, IoReorderThree } from "react-icons/io5";
import { useState, useEffect } from 'react';
import ThemeToggleBtn from './ui/ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

                <a href="#home">
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-36 md:w-50' alt="Logo" />
                </a>

                <div className={`text-gray-700 dark:text-white lg:text-base ${!sidebarOpen ? 'max-lg:w-0 overflow-hidden' : 'max-lg:w-60 max-lg:pl-10'} max-lg:fixed top-0 bottom-0 right-0 max-lg:min-h-screen max-lg:h-full max-lg:flex-col max-lg:bg-primary max-lg:text-white max-lg:pt-20 flex lg:items-center gap-5 transition-all z-[99]`}>
                    <IoClose
                        size={28}
                        className="text-white absolute top-5 right-4 lg:hidden cursor-pointer"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <a onClick={() => setSidebarOpen(false)} href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Home</a>
                    <a onClick={() => setSidebarOpen(false)} href="#services" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Services</a>
                    <a onClick={() => setSidebarOpen(false)} href="#our-work" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Our Work</a>
                    <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Contact Us</a>
                </div>

                <div className='flex items-center gap-2 md:gap-7'>
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                    <IoReorderThree size={30} style={theme === 'dark' ? { color: "#fff" } : { color: "#000" }} onClick={() => setSidebarOpen(true)} className='lg:hidden' />
                    <div className='max-lg:hidden flex items-center justify-center'>
                        <Button icon={<FaArrowRight size={15} />} href="#contact-us">Contact Us</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar