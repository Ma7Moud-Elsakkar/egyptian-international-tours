import React, { useRef } from 'react';
import { FaFacebook ,  FaWhatsapp , FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import "./contact.css"
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useLanguage } from '../../context/LanguageContext';

const ConactData = [
  {
    id: 1,
    icon : <MdOutlineAttachEmail />,
    titleKey: "contact_email",
    info: "info@eitours.net",
    link: "mailto:info@eitours.net"
  },
  {
    id: 2,
    icon : <FaWhatsapp />,
    titleKey: "whatsapp",
    info: "+201033192840",
    link: "https://wa.me/+201033192840"
  },
  {
    id: 3,
    icon : <FaFacebookMessenger />,
    titleKey: "messenger",
    info: "Egyption International Tours",
    link: "https://www.facebook.com/messages/t/314583779448713"
  }
]

function Contact() {
    const { t } = useLanguage();
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    const sendPromise = emailjs
      .sendForm('service_harxa2z', 'template_p3i5jka', form.current, 'TdUCvIbTl9B8CJGL7');

    toast.promise(sendPromise, {
      loading: t('msg_sending'),
      success: t('msg_success'),
      error: t('msg_error'),
    });

    sendPromise.then(() => {
      e.target.reset();
    }).catch((error) => console.error(error));
  };


  return (
    <section className='contact' id='contact'>
      <div className="top_section">
        <h5>{t('get_in_touch')}</h5>
        <h2>{t('contact_us')}</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ConactData.map(({id, icon, titleKey, info, link}) => (
            <article key={id} className='contact_option'>
              {icon}
              <h4>{t(titleKey)}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>{t('contact_link')}</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder={t('full_name')} name="name" />
          <input type="email" placeholder={t('your_email')} name='email' />
          <textarea rows={10} name="message" id="" placeholder={t('your_message')} ></textarea>
          <button className='btn btn-primary'>{t('send_message')}</button>
        </form>
      </div>

    </section>
  )
}

export default Contact