import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";

const Hero = () => {
    const headingRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    const imageRef = useRef(null);
    const bgImageRef = useRef(null);

    useEffect(() => {
        const initAnimation = async () => {
            await document.fonts.ready;

            const split = new SplitType(headingRef.current, {
                types: "chars",
            });

            gsap.from(split.chars, {
                y: 120,
                opacity: 0,
                stagger: 0.03,
                duration: 0.8,
                ease: "power4.out",
            });
        };

        initAnimation();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                {
                    scale: 0.6,
                },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        gsap.fromTo(
            bgImageRef.current,
            {
                scale: 0.8,
                rotate: -15,
                opacity: 0.5,
            },
            {
                scale: 1.2,
                rotate: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div
            id="home"
            className="flex flex-col items-center justify-center gap-6 py-24 pb-10 md:py-30 md:pb-14 lg:py-40 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
        >
            <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
                <img
                    className="w-20"
                    src={assets.group_profile}
                    alt="Group Profile"
                />
                <p className="text-xs font-medium">
                    Trusted by 10k+ people
                </p>
            </div>

            <h1
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium leading-[50px] sm:leading-[60px] md:leading-[80px] xl:leading-[120px] max-w-5xl font-chewy"
            >
                Turning imagination into <br />{" "}
                <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
                    digital
                </span>{" "}
                impact.
            </h1>

            <p className="text-sm sm:text-xl font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-xl pb-3">Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

            <div className="relative ">
                <img src={assets.hero_img} alt="Home Banner" className="w-full max-w-6xl" ref={imageRef} />
                <img ref={bgImageRef} src={assets.bgImage1} alt="Gradient BG" className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden" />
            </div>

        </div>
    );
};

export default Hero;