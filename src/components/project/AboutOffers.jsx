import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { data } from './projectData'
import { useLanguage } from '../../context/LanguageContext'
import './aboutOffers.css'
import Footer from '../footer/Footer'
import meImage from '../../../assets/egy2.png'
import NavOffers from './NavOffers'



function AboutOffers() {
  const { id } = useParams()
  const { t } = useLanguage()
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the selected offer by ID
  const offer = data.find(item => item.id === parseInt(id))

  if (!offer) {
    return (
      <section className='container offer-not-found'>
        <h2>Offer Not Found</h2>
        <br />
        <Link to="/" className='btn btn-primary'>Back Home</Link>
      </section>
    )
  }

  return (
    
    <section id='offer-details' className='projects'>
      <div className="me logo-top">
        <Link to="/"><img src={meImage} alt="Logo" /></Link>
      </div>
      <NavOffers />

      <div className="container projects_container">
        {data.map(({id , image, pdf, desKey})=> (
        <article key={id} className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={image} alt="" />
          </div>

          <h3>{t(desKey)}</h3>
          <div className="portfolio_item_btns">
            <Link to={`/offer/${id}`} className='btn'>{t('view_details')}</Link>
            <a href={pdf} target='_blank' rel="noreferrer" className='btn btn-primary' download>{t('for_more')}</a>
          </div>
        </article>
        ))}

        <div className="offer-details-btns">
          <a href={offer.pdf} target="_blank" rel="noreferrer" className='btn' download>
            {t('for_more') || 'Download Details'}
          </a>
          <Link to="/" className='btn btn-primary'>
            {t('home') || 'Back to Home'}
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default AboutOffers