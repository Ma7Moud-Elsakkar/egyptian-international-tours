import React from 'react'
import me from "../../../assets/egy2.png"
//import cv from "../../../pdf/offer.zip"
import "./home.css"
import Social from './social'
import { useLanguage } from '../../context/LanguageContext'

function Home() {
  const { t } = useLanguage();
  return (
    <div className='home'>
      <div className="container home_container">
        <h4 className='text-light'>{t('welcome')}</h4>
        <h1>{t('company_name')}</h1>

        <div className="btns">
          <a href='#Offers' className='btn' >{t('offers_services')}</a>
          <a href="#contact" className='btn btn-primary'>{t('contact_us')}</a>
        </div>


        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#about" className='scroll-down'>{t('scroll_down')}</a>

        <Social />
        
      </div>
    </div>
  )
}

export default Home