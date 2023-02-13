import React from "react";
import "./Oteller.css";
import { useParams } from "react-router-dom";
import { Context } from "../../../../ContextApi/FilterTurlar";
import { useContext, useEffect, useState, useLayoutEffect } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { Link } from "react-router-dom";
function Oteller() {
  const { isim } = useParams();
  const { datas } = useContext(Context);
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  let count = 1;
  return (
    <div className="oteller">
      <div className="oteller_width">
        <div className="oteller_filter_field">
          <div className="oteller_filter_field_sonuc">
            <h4>Sonuçları Daraltın</h4>
            <p>
              <span>{} Otel</span> Listeleniyor
            </p>
          </div>
          <div>
            <MultiRangeSlider
              min={0}
              max={100}
              step={5}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
              label={false}
              ruler={false}
              style={{
                border: "none",
                boxShadow: "none",
                padding: "15px 10px",
              }}
              barLeftColor="green"
              barInnerColor="blue"
              barRightColor="green"
              thumbLeftColor="lime"
              thumbRightColor="lime"
            />
          </div>
        </div>
        <div className="oteller_map_field">
          <div className="oteller_map_field_header">
            <div className="oteller_map_field_name">{isim}</div>
            <div>
              <ul></ul>
            </div>
          </div>
          <div className="oteller_map_field_body">
            {datas
              .filter((x) => x.otel.toLowerCase().includes(isim.toLowerCase()))
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
                      <span>2 Yetişkin 4 Gece <b>Toplam Fiyat</b></span>
                    </div>
                    <div className="map_card_otelqiymet">
                      {x.otelqiymet} ₺
                    </div>
                    <div className="map_card_detail">
                      <Link to={x.oteltext}><button>Oteli İncele</button></Link>
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

export default Oteller;
