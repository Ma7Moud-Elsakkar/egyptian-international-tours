import React from 'react'
import { FaFacebook , FaWhatsapp , FaInstagram , FaTiktok} from "react-icons/fa";



export default function Social() {
  return (
    <div className='home-socials'>
        <a href="https://www.facebook.com/share/17s9oFqBy3/?mibextid=wwXIfr" target='_blank'><FaFacebook /></a>
        <a href="https://wa.me/+201033192840" target='_blank'><FaWhatsapp /></a>
        <a href="https://www.instagram.com/egyption_international_tours?igsh=aWE2cW00bzVxamM2&utm_source=qr" target='_blank'><FaInstagram /></a>
        <a href="https://www.tiktok.com/@eit_tours" target='_blank'><FaTiktok /></a>
    </div>
  )
}

