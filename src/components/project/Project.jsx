import React from 'react'
import "./project.css"
import IMG1 from "../../../pdf/travil.jpeg"
import IMG2 from "../../../pdf/antalia.jpeg"
import IMG3 from "../../../pdf/albania.jpeg"
import IMG4 from "../../../pdf/turky.jpeg"
import IMG5 from "../../../pdf/visa.jpeg"
import IMG6 from "../../../pdf/sharm.jpeg"
import PDF1 from "../../../pdf/Albania.pdf"
import PDF2 from "../../../pdf/Antalya.pdf"
import PDF3 from "../../../pdf/Armenia.pdf"
import PDF4 from "../../../pdf/Istanbul.pdf"
import PDF5 from "../../../pdf/Sousse.pdf"
import PDF6 from "../../../pdf/Tunisia.pdf"
import { useLanguage } from '../../context/LanguageContext';

const data = [
  {
    id: 1,
    image: IMG1,
    pdf: PDF1,
    desKey: "project_albania"
  },
  {
    id: 2,
    image: IMG2,
    pdf: PDF2,
    desKey: "project_antalya"
  },
  {
    id: 3,
    image: IMG3,
    pdf: PDF3,
    desKey: "project_armenia"
  },
  {
    id: 4,
    image: IMG4,
    pdf: PDF4,
    desKey: "project_istanbul"
  },
  {
    id: 5,
    image: IMG5,
    pdf: PDF5,
    desKey: "project_sousse"
  },
  {
    id: 6,
    image: IMG6,
    pdf: PDF6,
    desKey: "project_tunisia"
  }
]

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
            <a href={pdf} target='_blank' className='btn' download>{t('view_details')}</a>
            <a href="" target='_blank' className='btn btn-primary'>{t('for_more')}</a>
          </div>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Project