import React from 'react'
import { useParams } from 'react-router-dom'
function Otelincele() {
  const {otelname}=useParams()
  console.log(otelname);
  return (
    <div>Otelincele</div>
  )
}

export default Otelincele