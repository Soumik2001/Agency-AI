import { FaArrowUp } from 'react-icons/fa6';
import assets from '../assets/assets';
import Title from './Title'
import { useRef, useState } from 'react';

const WorkCard = ({ project, truncateWords }) => {
    const divRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showGlow, setShowGlow] = useState(false);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div
            ref={divRef}
            onMouseEnter={() => setShowGlow(true)}
            onMouseLeave={() => setShowGlow(false)}
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:-translate-y-2 transition-all duration-500 flex flex-col mx-2"
        >
            <div
                className={`pointer-events-none blur-[60px] dark:blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[100px] h-[100px] absolute z-0 transition-opacity duration-500 mix-blend-multiply dark:mix-blend-lighten ${showGlow ? 'opacity-70' : 'opacity-0'}`}
                style={{ top: mousePosition.y - 50, left: mousePosition.x - 50 }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover transition duration-700 group-hover:scale-110"
                    />
                </div>

                <div className="p-6 flex flex-col flex-1">
                    <span className="inline-flex w-fit items-center rounded-full px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                        {project.category}
                    </span>

                    <h3 className="text-xl font-bold mt-5">{project.title}</h3>

                    <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">
                        {truncateWords(project.description, 12)}
                    </p>

                    <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto pt-6 self-start"
                    >
                        <span className="flex items-center justify-center w-11 h-11 rounded-full border border-indigo-500 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300">
                            <FaArrowUp className="text-lg text-white rotate-45 transition-transform duration-300 group-hover:rotate-90" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const OurWork = () => {

    const workData = [
        {
            title: "Storytellerslive",
            description: "A modern and responsive WordPress website built with performance, SEO, and user experience in mind.",
            image: assets.st_live,
            siteUrl: "https://storytellerslive.org/",
            category: "WordPress + WooCommerce"
        },
        {
            title: "Bighouse Ent",
            description: "A fully custom WordPress website developed from scratch with tailored functionality and optimized performance.",
            image: assets.bighouse,
            siteUrl: "https://der.xpx.mybluehost.me/",
            category: "WordPress Custom"
        },
        {
            title: "OpenBook Life",
            description: "Custom WordPress and WooCommerce solution with unique features, responsive design, and seamless shopping experience.",
            image: assets.open_book,
            siteUrl: "https://openbook.life/",
            category: "WordPress Custom + WooCommerce"
        },
        {
            title: "Conference Contacts",
            description: "Professional Elementor website featuring responsive layouts, custom sections, and an intuitive user experience.",
            image: assets.cc,
            siteUrl: "https://www.conferencecontacts.co.uk/",
            category: "Elementor"
        },
        {
            title: "University of Southern California",
            description: "WordPress website built with the Gutenberg editor, delivering fast performance and easy content management.",
            image: assets.resed,
            siteUrl: "https://reseddev.wpenginepowered.com/",
            category: "WordPress + Gutenberg"
        },
        {
            title: "Saepio",
            description: "Elegant Elementor-powered website with custom layouts, responsive design, and engaging user interactions.",
            image: assets.saepio,
            siteUrl: "https://saepio.co.uk/",
            category: "Elementor"
        },
        {
            title: "Global Max Academy",
            description: "WooCommerce-powered educational website built with WordPress, offering secure payments and a smooth learning experience.",
            image: assets.gmacademy,
            siteUrl: "https://globalmaxacademy.com/",
            category: "WordPress + WooCommerce"
        },
        {
            title: "TheStaircaseStudio",
            description: "Beautifully crafted staircase solutions for homeowners, builders and designers looking for a high-end finish.",
            image: assets.staircase,
            siteUrl: "https://thestaircasestudio.com.au/",
            category: "Elementor"
        },
        {
            title: "Progent AI",
            description: "The AI Platform That Eliminates Guesswork from Every Supply Chain Decision",
            image: assets.progent,
            siteUrl: "https://progentai.com/",
            category: "WordPress + Gutenberg"
        }
    ];

    const truncateWords = (text, words) => {
        const arr = text.split(" ");
        return arr.length > words
            ? arr.slice(0, words).join(" ") + "..."
            : text;
    };

    return (
        <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-10 md:py-25 lg:py-28 lg:pb-10 text-gray-700 dark:text-white'>

            <Title title="Our Latest Work" description="We build fast, responsive, and scalable websites tailored to your business needs, delivering exceptional user experiences and measurable results." />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {workData.map((project, index) => (
                    <WorkCard key={index} project={project} truncateWords={truncateWords} />
                ))}
            </div>

        </div>
    )
}

export default OurWork