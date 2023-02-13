import React from 'react'
import Iframe from 'react-iframe'
import './OtelMap.css'
function OtelMap() {
  return (
    <div className='otelmap'>
      <div className='otelmap_companent'>
        <h3>Satış Ofislerimiz</h3>
      <Iframe className='iframe' url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.748393197389!2d29.109475515392194!3d41.030760279298484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9d43f9f5f79%3A0x3766d1cfb3c6fb8d!2zVGF0aWxCdWR1ci5jb20gR2VuZWwgTcO8ZMO8cmzDvGs!5e0!3m2!1sen!2s!4v1675941815344!5m2!1sen!2s'/>
      </div>
    </div>
  )
}

export default OtelMap