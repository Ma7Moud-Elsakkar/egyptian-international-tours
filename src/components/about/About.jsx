import React from 'react'
import './about.css'
import IMageME from "../../../assets/logo.jpg"
import { FaAward , FaUsers , FaFolderOpen} from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { useLanguage } from '../../context/LanguageContext';

function About() {
  const { t } = useLanguage();
  return (
    <section className='about' id='about'>
      <div className="top_section">
        <h5>{t('get_to_know')}</h5>
        <h2>{t('about_us')}</h2>
      </div>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt="" />
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>{t('experience')}</h5>
              <small>{t('experience_desc')}</small>
            </div>
            <div className="about_card">
              <FaUsers className='about_icon' />
              <h5>{t('clients')}</h5>
              <small>{t('clients_desc')}</small>
            </div>
            <div className="about_card">
              <PiCertificate className='about_icon' />
              <h5>{t('certificates')}</h5>
              <small>{t('certificates_desc')}</small>
            </div>
          </div>

          <p>{t('about_text_1')} <br/>
              {t('about_text_2')}<br/>
              {t('about_text_3')}<br />
              {t('about_text_4')}
          </p>
          <a href="#contact" className='btn btn-primary'>{t('lets_talk')}</a>
        </div>
      </div>
    </section>
  )
}

export default About