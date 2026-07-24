import assets from "../assets/assets";
import { Link } from 'react-scroll';

const Footer = ({ theme }) => {
    return (
        <div className="bg-slate-50 dark:bg-gray-900 ">
            <div className="pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-18 xl:px-40 max-w-[1600px] mx-auto">
                {/*Footer Top*/}

                <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
                    <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" className="w-36 sm:w-50" />
                        <p className="max-w-md">From strategy to execution, we craft digital solutions that move your business forward</p>

                        <ul className="flex flex-wrap gap-5 sm:gap-8">
                            <li><Link to="home"
                                smooth={true}
                                duration={500}
                                className="hover:text-primary">Home
                            </Link></li>
                            <li><Link to="services"
                                smooth={true}
                                duration={500}
                                className="hover:text-primary">Services
                            </Link></li>
                            <li><Link to="our-work"
                                smooth={true}
                                duration={500}
                                className="hover:text-primary">Our Work
                            </Link></li>
                            <li><Link to="team"
                                smooth={true}
                                duration={500}
                                className="hover:text-primary">Our Team
                            </Link></li>
                            <li><Link to="contact-us"
                                smooth={true}
                                duration={500}
                                className="hover:text-primary">Contact Us
                            </Link></li>

                        </ul>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                        <h3 className="font-semibold">Subscribe to our newsletter</h3>
                        <p className="text-sm mt-2 mb-6">The latest news,articles and resources, sent to your inbox weekly</p>
                        <div className="flex gap-2 text-sm">
                            <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500" />
                            <button className="bg-[#5044E5] text-white rounded px-6">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-300 dark:border-gray-600 my-6" />

                {/* Footer Bottom */}
                <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
                    <p>Copyright {new Date().getFullYear()} &copy; Agency-AI - All Right Reserved.</p>
                    <div className="flex items-center justify-between gap-4">
                        <a href="#" className="hover:opacity-75 transition-opacity duration-200"><img src={assets.facebook_icon} alt="Facebook" /></a>
                        <a href="#" className="hover:opacity-75 transition-opacity duration-200"><img src={assets.twitter_icon} alt="Twitter" /></a>
                        <a href="#" className="hover:opacity-75 transition-opacity duration-200"><img src={assets.instagram_icon} alt="Instagram" /></a>
                        <a href="#" className="hover:opacity-75 transition-opacity duration-200"><img src={assets.linkedin_icon} alt="Linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer