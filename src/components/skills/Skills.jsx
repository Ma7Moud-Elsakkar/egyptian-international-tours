import React from 'react'
import './skills.css'
import Plan from "../../../assets/airplane.png"
import Passport from "../../../assets/passport.svg"
import Cube from "../../../assets/cube.png"
import Global from "../../../assets/global.svg"
import Pyramid from "../../../assets/pyramid.png"
import { useLanguage } from '../../context/LanguageContext';

const data = [
  {
    id: 1,
    image: Plan,
    titleKey: 'flight',
    discKey: "flight_desc"
  },
  {
    id: 2,
    image: Passport,
    titleKey: 'visas',
    discKey: "visas_desc"
  },
  {
    id: 3,
    image: Cube,
    titleKey: 'religious',
    discKey: "religious_desc"
  },
  {
    id: 4,
    image: Global,
    titleKey: 'foreign',
    discKey: "foreign_desc"
  },
  {
    id: 5,
    image: Pyramid,
    titleKey: 'domestic',
    discKey: "domestic_desc"
  }
]

function Skills() {
  const { t } = useLanguage();
  return (
    <section className='skills' id='skills'>
      <div className="top_section">
        <h5>{t('what_we_offer')}</h5>
        <h2>{t('our_services')}</h2>
      </div>

      <div className="container container_skills">
          {data.map(({id , image , titleKey , discKey}) => (

        <article key={id} className='card_skill'>
          <div className="icon">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h4>{t(titleKey)}</h4>
            <p className='text-light'>{t(discKey)}</p>
          </div>
        </article>
        
          ))}
      </div>
    </section>
  )
}

export default Skills

