import React from 'react'
/* import { useContext } from 'react'
import { Context } from '../../ContextApi/FilterTurlar' */
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { AiOutlineDown } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsHeadset } from 'react-icons/bs';
import tatilbudurlogo from '../../../img/tatilbudurcom-logo.png'
import axios from 'axios'
import { useEffect,useState } from 'react';

function Navbar() {
    /* const {setdata}=useContext(Context) */
    const [datar,setdatar]=useState([])
    useEffect(() => {
      axios.get("http://localhost:8000/butunturlar")
      .then(res=>setdatar(res.data))
    }, [])
    
    console.log(datar)
  return (
    <div className='tatilbudur_navbar'>
      <div className='tatilbudur_navbar_companents'>
        <div className='tatilbudur_navbar_logo'>
          <img src={tatilbudurlogo} alt="" /></div>
        <div className='tatilbudur_navbar_otel_turlar'>
          <ul className='tatilbudur_navbar_otel_turlar_ul'>
            <li className='tatilbudur_navbar_otel'>
              <Link to={"/"}>Otel <div className='tatilbudur_navbar_otel_icon'>< AiOutlineDown/></div></Link>

            </li>
            <li className='tatilbudur_navbar_otel'>
              <Link to={"/"}>Tur <div className='tatilbudur_navbar_otel_icon'>< AiOutlineDown/></div></Link>
            </li>
          </ul>
        </div>
        <div className='tatilbudur_navbar_contact_login'>
          <ul className='tatilbudur_navbar_contact_login_ul'>
            <li className='tatilbudur_navbar_phone'><Link to={"/"}><span><BsHeadset/></span >Sizi Arayalım</Link></li>
            <li className='tatilbudur_navbar_map'><Link to={"/"}><span><BiMap/></span>Satış Ofisleri</Link></li>
            <li className='tatilbudur_navbar_login'><Link to={"/"}>Giriş Yapın</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
