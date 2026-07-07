import LogoLoop from "./ui/LogoLoop";
import { company_logos } from "../assets/assets";

const logos = company_logos.map((logo, index) => ({
    src: logo,
    alt: `Company ${index + 1}`,
}));

const LogoCarousel = () => {
    return (
        <>
            <h3 className="font-semibold text-lg md:text-xl xl:text-2xl text-gray-500 text-center dark:text-white">Trusted by Leading Companies</h3>
            <div className="relative h-[120px] max-w-4/5 mx-auto overflow-hidden flex items-center justify-center">
                <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-black pointer-events-none" />

                <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-black pointer-events-none" />

                <LogoLoop
                    logos={logos}
                    speed={80}
                    direction="left"
                    logoHeight={30}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Trusted companies"
                />
            </div>
        </>
    );
};

export default LogoCarousel;