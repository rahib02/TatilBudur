import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../../ContextApi/FilterTurlar";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineStar } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
function Filteroteller() {
  const { otelkonum } = useParams();
  const { datas } = useContext(Context);
  const { setdatas } = useContext(Context);
  const [searchs,setsearchs]=useState(" ")
  const artan = () => {
    const sortotel = [...datas].sort((a, b) => a.otelqiymet - b.otelqiymet);
    setdatas(sortotel);
  };
  const azalan = () => {
    const sortotel = [...datas].sort((a, b) => b.otelqiymet - a.otelqiymet);
    setdatas(sortotel);
  };
  const artanstar = () => {
    const sortotel = [...datas].sort((a, b) => a.otelstar - b.otelstar);
    setdatas(sortotel);
  };
  const azalanstar = () => {
    const sortotel = [...datas].sort((a, b) => b.otelstar - a.otelstar);
    setdatas(sortotel);
  };
  const count = Object.keys(
   datas.filter((x) => x.otelkonum.toLowerCase().includes(otelkonum.toLowerCase())).filter((x) => x.oteltext.toLowerCase().includes(searchs.toLowerCase()))
  ).length;
  const searchdata=(e)=>{
    setsearchs(e.target.value);
  }
  return (
    <div className="oteller">
      <div className="oteller_width">
        <div className="oteller_filter_field">
          <div className="oteller_filter_field_sonuc">
            <h4>Sonuçları Daraltın</h4>
            <p>
              <span>{count} Otel</span> Listeleniyor
            </p>
          </div>
          <div className="oteller_filter_field_sort">
            <div className="oteller_filter_sort">
              <h4>Qiymət <span className="oteller_filter_sort_money"><FaMoneyBillWave/></span></h4>
              <ul>
                <li>
                  <button onClick={artan}>Azdan-Çoxa</button>
                </li>
                <li>
                  <button onClick={azalan}>Çoxdan-Aza</button>
                </li>
              </ul>
            </div>
            <div className="oteller_filter_sort">
              <h4>Ulduz <span className="oteller_filter_sort_star"><MdOutlineStar/></span></h4>
              <ul>
                <li>
                  <button onClick={artanstar}>Azdan-Çoxa</button>
                </li>
                <li>
                  <button onClick={azalanstar}>Çoxdan-Aza</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="oteller_map_field">
          <div className="oteller_map_field_header">
            <div className="oteller_map_field_name">{otelkonum}</div>
            <div className="oteller_map_field_search"><input type="text"  placeholder="Otel name search" onChange={searchdata}/></div>
          </div>
          <div className="oteller_map_field_body">
            {datas
              .filter((x) => x.otelkonum.toLowerCase().includes(otelkonum.toLowerCase())).filter((x) => x.oteltext.toLowerCase().includes(searchs.toLowerCase()))
              .map((x, index) => (
                <div className="map_card" key={index}>
                  <div className="map_card_otelimg">
                    <img src={x.otelimg} alt="" />
                  </div>
                  <div className="map_card_about">
                    <div className="map_card_oteltext">{x.oteltext}</div>
                    <div className="map_card_oteltitle">
                      {x.oteltitle.map((y) =>
                        Object.values(y).map((z, index) => (
                          <span key={index}>{z}</span>
                        ))
                      )}
                    </div>
                    <div className="map_card_oteldahil">
                      <span>{x.oteldahil}</span>
                    </div>
                    <div className="map_card_otelekstra">
                      {x.otelekstra.map((y) =>
                        Object.values(y).map((z, index) => (
                          <div key={index}>{z}</div>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="map_card_price_detail">
                    <div className="map_card_otelstar">
                      <span>{x.otelstar}/10 </span>Fevkalade
                    </div>
                    <div className="map_card_otelcount">
                      <span>
                        2 Yetişkin 4 Gece <b>Toplam Fiyat</b>
                      </span>
                    </div>
                    <div className="map_card_otelqiymet">{x.otelqiymet} ₺</div>
                    <div className="map_card_detail">
                      <Link to={x.oteltext}>
                         <button>Oteli İncele</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filteroteller;
