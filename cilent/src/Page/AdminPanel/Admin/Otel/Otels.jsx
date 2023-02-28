import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../../ContextApi/Admindata";
import { AiTwotoneStar } from 'react-icons/ai';
import "./Otels.css"
import axios from "axios";
function Otels() {
  const { serverdata } = useContext(Context);
  const {setserverdata}=useContext(Context)
  
  const oteldelte=(id)=>{
    axios.delete(`http://localhost:8000/butunturlar/${id}`)
    setserverdata(serverdata.filter(x=>x._id!=id))
  }
  const otelview=(id)=>{
    
  }
  const [searchs,setsearchs]=useState(" ")
  const [konum,setkonum]=useState(" ")
  const searchdata=(e)=>{
    setsearchs(e.target.value);
  }
    const {otelkonum}=useParams()
    let deyisenparam =otelkonum
  useEffect(() => {
    if (otelkonum=="all_otel") {
      setkonum("")
    }else{setkonum(otelkonum)}
  
  }, [deyisenparam])
  
  return (
    <div className="adminpanel_oteller">
      <div>
         <div className="oteller_map_field_search"><input type="text"  placeholder="Otel name search" onChange={searchdata}/></div>
      </div>
      <div className="otel_tabel">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Otel</th>
              <th>Otel Category</th>
              <th>Otel Location</th>
              <th>Otel Name</th>
              <th style={{color:"green"}}>Price</th>
              <th style={{color:"yellow"}}>Star</th>
               <th style={{color:"blue"}}>Setting</th>
            </tr>
          </thead>
          <tbody>
            {serverdata.filter((x) => x.otel.toLowerCase().includes(konum.toLowerCase())).filter((x) => x.oteltext.toLowerCase().includes(searchs.toLowerCase())).map((x,index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={x.otelimg}
                      alt=""
                      style={{width: "45px", height: "45px"}}
                      className="rounded-circle"
                    />
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{x.otel}</p>
                </td>
                <td >
                  <p className="fw-normal mb-1">
                     {x.oteltitle.map((y) =>
                        Object.values(y).map((z, index) => (
                          <span style={{fontSize:"small"}} key={index}>{z} </span>
                        ))
                      )}
                  </p>
                </td>
                <td >{x.oteltext}</td>
                <td style={{color:"green",fontSize:"17px"}}>{x.otelqiymet} ₺</td>
                <td  style={{color:"yellow",fontSize:"17px"}}>{x.otelstar} <AiTwotoneStar /></td>
                <td>
                  <button type="button" className="btn btn-danger btn-sm btn-rounded" onClick={()=>oteldelte(x._id)}>Delte</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Otels;
