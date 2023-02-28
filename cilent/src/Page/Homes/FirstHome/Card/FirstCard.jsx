import React from "react";
import "./FirstCard.css";
import { Link } from "react-router-dom";
import { Context } from "../../../../ContextApi/FilterTurlar";
import { useContext, useState } from "react";
function FirstCard() {
  const { datas } = useContext(Context);
  const [cardfilter, setcardfilter] = useState("Yurtiçi Oteller");
  const cardfilters=(x)=>{
    setcardfilter(x)
  }
  return (
    <div className="firstcard">
      <div className="firstcard_text">Efsane Fırsatları Kaçırma!</div>
      <div className="firstcard_filter">
        <ul className="firstcard_filter_ul">
          <li>
            <button onClick={()=>cardfilters("Yurtiçi Oteller")}>Yurtiçi Oteller</button>
          </li>
          <li>
            <button  onClick={()=>cardfilters("Kış Oteller")}>Kayak Otelleri</button>
          </li>
          <li>
            <button  onClick={()=>cardfilters("Termal Oteller ")}> Termal Oteller</button>
          </li>
        </ul>
      </div>
      <div className="row row-cols-1 row-cols-md-4 ">
        {datas
          .filter((x) => x.otel == cardfilter)
          .slice(0, 4)
          .map((y,index) => (
            <div className="col" key={index}>
              <div className="card h-100 card_height" >
                <Link to={"/"}>
                  <div className="col">
                    <div className="card">
                      <img
                        src={y.otelimg}
                        className="card-img-top"
                        alt="Skyscrapers"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{y.oteltext}</h5>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          {y.oteltitle.map((y) =>
                            Object.values(y).map((z, index) => (
                              <span key={index}> {z}</span>
                            ))
                          )}
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FirstCard;
