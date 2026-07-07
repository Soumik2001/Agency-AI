import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoCarousel from './components/LogoCarousel';
import Services from './components/Services';
import OurWork from './components/OurWork'

const App = () => {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');



  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <div className='dark:bg-black relative '>
      <div className="relative">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <LogoCarousel />
        <Services />
        <OurWork />
      </div>
    </div>
  )
}

export default App