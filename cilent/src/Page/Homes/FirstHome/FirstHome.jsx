import React from 'react'
import './FirstHome.css'
import SectionCarusel from './Carusel/SectionCarusel'
import Populer from './Populer/Populer'
import SectionUyeIndirim from './UyeIndirimi/SectionUyeIndirim'
import FirstCard from './Card/FirstCard'

function FirstHome() {
  return (
    <div className='FirstHome'>
    <SectionCarusel/>
     <FirstCard/>
    <Populer/>
    <SectionUyeIndirim/>
    </div>
  )
}

export default FirstHome