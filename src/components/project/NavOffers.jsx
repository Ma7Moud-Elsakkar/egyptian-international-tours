import React, { useState }  from 'react'
import "./navOffers.css"
import { AiOutlineHome } from "react-icons/ai";
import { CiUser, CiHeart  } from "react-icons/ci";
import { BiBook , BiMessageSquareDetail  } from "react-icons/bi";
import { MdOutlineLightMode, MdOutlineDarkMode, MdLanguage } from "react-icons/md";
import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';


function NavOffers() {

  const [activeNave , setActiveNave] = useState("#")
  const [theme, setTheme] = useState("dark");
  const { locale, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  const toggleTheme = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  };




  return (
    <nav>
      <a href="#" className={activeNave === "#" ? "active" : ""} onClick={() => setActiveNave("#")} ><AiOutlineHome /></a>
      <a href="#about" className={activeNave === "#about" ? "active" : ""} onClick={() => setActiveNave("#about")}><CiUser /></a>
      <a href="#skills" className={activeNave === "#skills" ? "active" : ""} onClick={() => setActiveNave("#skills")}><CiHeart /></a>
      <a href="#Offers" className={activeNave === "#Offers" ? "active" : ""} onClick={() => setActiveNave("#Offers")}><BiBook /></a>
      <a href="#contact" className={activeNave === "#contact" ? "active" : ""} onClick={() => setActiveNave("#contact")}><BiMessageSquareDetail /></a>
      
      <button onClick={toggleLanguage} className="theme-toggle" title={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <MdLanguage />
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
          {locale === 'en' ? 'عربي' : 'EN'}
        </span>
      </button>

      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </button>
    </nav>
  )
}

export default NavOffers