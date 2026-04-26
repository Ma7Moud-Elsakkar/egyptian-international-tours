import React from 'react'
import { FaFacebook, FaWhatsapp, FaTiktok , FaInstagram} from "react-icons/fa";
import "./footer.css";
import { useLanguage } from '../../context/LanguageContext';

function Footer() {
  const { t, locale } = useLanguage();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <a href="/" className='footer-logo'>{t('company_name')}</a>
          <p>{t('footer_desc')}</p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/17s9oFqBy3/?mibextid=wwXIfr"  target='_blank' rel="noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/+201033192840" target='_blank' rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/egyption_international_tours?igsh=aWE2cW00bzVxamM2&utm_source=qr" target='_blank' rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@eit_tours" target='_blank' rel="noreferrer"><FaTiktok /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>{t('quick_links')}</h2>
          <ul>
            <li><a href="#">{t('home')}</a></li>
            <li><a href="#about">{t('about')}</a></li>
            <li><a href="#skills">{t('services')}</a></li>
            <li><a href="#Offers">{t('offers')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
          </ul>
        </div>
        
        <div className="footer-section links">
          <h2>{t('customer_service')}</h2>
          <ul>
            <li><a href="#">{t('privacy')}</a></li>
            <li><a href="#">{t('terms')}</a></li>
            <li><a href="#">{t('faq')}</a></li>
            <li><a href="#">{t('return_policy')}</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>{t('contact_us')}</h2>
          <ul>
            <li>
              <span>{t('address_label')}</span> {t('address')}
            </li>
            <li>
              <span>{t('phone_label')}</span> +201033192840
            </li>
            <li>
              <span>{t('email_label')}</span> info@eitours.net
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t('all_rights')}</p>
      </div>
    </footer>
  )
}

export default Footer