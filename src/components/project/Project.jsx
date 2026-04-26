import React from 'react'
import { Link } from "react-router-dom";
import "./project.css"
import { useLanguage } from '../../context/LanguageContext';
import { data } from './projectData';

function Project() {
  const { t } = useLanguage();
  return (
    <section className='projects' id='Offers'>
      <div className="top_section">
        <h5>{t('latest_offers')}</h5>
        <h2>{t('offers_title')}</h2>
      </div>

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
      </div>
    </section>
  )
}

export default Project