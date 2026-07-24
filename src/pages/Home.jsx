import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoCarousel from "../components/LogoCarousel";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    const mouse = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        document.addEventListener("mousemove", handleMouseMove);

        let animationFrameId;

        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.1;
            position.current.y += (mouse.current.y - position.current.y) * 0.1;

            if (dotRef.current && outlineRef.current) {
                dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px,${mouse.current.y - 6}px,0)`;
                outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px,${position.current.y - 20}px,0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="dark:bg-black relative">
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero />
            <LogoCarousel />
            <Services />
            <OurWork />
            <Team />
            <ContactUs />
            <Footer theme={theme} />

            <div
                ref={outlineRef}
                className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
            />

            <div
                ref={dotRef}
                className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
            />
        </div>
    );
}