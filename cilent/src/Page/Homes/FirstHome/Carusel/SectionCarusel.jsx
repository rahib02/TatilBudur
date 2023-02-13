import React from "react";
import "./SectionCarusel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import erkenzerezervasyonlogo from "../../../../img/FIrsthomeCarusel/perken-rezervasyon-firsatlari-basladip-1672995688.jpg";
import efsanekislogo from "../../../../img/FIrsthomeCarusel/pefsane-kis-kampanyasi-basladip-1672727811.jpg";
import kayakotellogo from "../../../../img/FIrsthomeCarusel/pkayak-otellerinde-erken-rezervasyon-firsatlari-basladip-1670935603.jpg";
import kibrisotellogo from "../../../../img/FIrsthomeCarusel/pkibris-otellerinde-b500-tlb-indirimu1p-classu1pbrp-1674481257.jpg";
import bankkartlogo from "../../../../img/FIrsthomeCarusel/pspan-stylefont-weight-7002000-tlye-spanvaran-bankkart-lirabrp-1675458301.jpg";
import sevgililereozellogo from "../../../../img/FIrsthomeCarusel/psevgililer-gunune-ozel-firsatlar-basladip-1675089670.jpg";
import kurbanbayramilogo from  "../../../../img/FIrsthomeCarusel/bkurban-bayramina-ozel-kultur-turlaribrbrb-1654519875.png";
import sevgililergunulogo from  "../../../../img/FIrsthomeCarusel/sevgililer-gunu-firsatlari-tatilbudurda-1675076653.jpg";
import {Link} from 'react-router-dom'
function SectionCarusel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="firsthome">
      <div className="firsthome_carusel_card">
        <Carousel responsive={responsive} className='homecarusel'>
        <div className="Section_caruse_items">
          <div className="Section_caruse_item">
            <div className="Section_caruse_item_img">
              <img src={erkenzerezervasyonlogo} alt="" />
            </div>
            <div className="Section_caruse_item_text" style={{background:"#2A55FF"}}>
              <div className="Section_caruse_item_text_basliq">
                Erken Rezervasyon Fırsatları Devam Ediyor!
              </div>
              <div  className="Section_caruse_item_text_end" >
                <p>
                <b>%50`</b>ye varan<b>İndirim</b>
              </p>
              <p>
                <b>5 Ay </b>Erteleme
              </p>
              <p>
                Koşulsuz<b>İptal Hakkı </b>
              </p>
              <p>
                Şimdi<b>4`te 1`ini</b>Öde
              </p>
              </div>
              <Link to={"/"}><button className="firsthome_carusel_button">Otelleri İncele <span><AiOutlineArrowRight /></span></button></Link>
            </div>
          </div>
        </div>
        <div className="Section_caruse_items">
          <div className="Section_caruse_item">
            <div className="Section_caruse_item_img">
              <img src={efsanekislogo} alt="" />
            </div>
            <div className="Section_caruse_item_text" style={{background:"#AA2AFF"}}>
              <div className="Section_caruse_item_tarix;">
                Son Gün <b>15 Şubat</b>
              </div>
              <div className="Section_caruse_item_text_basliq">
                 Efsane Kış Kampanyası Başladı! 
              </div>
              <div className="Section_caruse_item_text_end">
                <p>6000 TL ve üzeri rezervasyonlarda geçerli <span>350 TL İndirim!</span></p>
              <p><span>İndirim Kodu: KIS350</span></p>
              </div>
              <Link to={"/"}><button className="firsthome_carusel_button">Otelleri İncele <span><AiOutlineArrowRight /></span></button></Link>
            </div>
          </div>
        </div>
        <div className="Section_caruse_items">
          <div className="Section_caruse_item">
            <div className="Section_caruse_item_img">
              <img src={kibrisotellogo} alt="" />
            </div>
            <div className="Section_caruse_item_text" style={{background:"#FF2A55"}}>
              <div className="Section_caruse_item_tarix;">
                Son Gün <b>13 Şubat</b>
              </div>
              <div className="Section_caruse_item_text_basliq">
                Kıbrıs Otellerinde <b> Kıbrıs Otellerinde </b> İndirim!
              </div>
              <div className="Section_caruse_item_text_end"><p>
                15.000 TL ve üzeri rezervasyonlarınızda <b>500 TL indirim!</b>
              </p>
              <p>
                <b>İndirim Kodu: KIBRIS500</b>
              </p></div>
              <Link to={"/"}><button className="firsthome_carusel_button">Otelleri İncele <span><AiOutlineArrowRight /></span></button></Link>
            </div>
          </div>
        </div>
        <div className="Section_caruse_items">
          <div className="Section_caruse_item">
            <div className="Section_caruse_item_img">
              <img src={sevgililereozellogo} alt="" />
            </div>
            <div className="Section_caruse_item_text" style={{background:"#FF0000"}}>
              <div className="Section_caruse_item_text_basliq">
                Sevgililer Gününe Özel Fırsatlar Başladı!
              </div>
              <div className="Section_caruse_item_text_end">
                <p>
                <b>%45</b>'e varan<b>İndirim</b>
              </p>
              <p>
                <b>5 Ay</b> Erteleme
              </p>
              <p>
                Şimdi <b>4'te 1'ini</b> Öde
              </p>
              </div>
              
              <Link to={"/"}><button className="firsthome_carusel_button">Otelleri İncele <span><AiOutlineArrowRight /></span></button></Link>
            </div>
          </div>
        </div>
        <div className="Section_caruse_items">
          <div className="Section_caruse_item">
            <div className="Section_caruse_item_img">
              <img src={bankkartlogo} alt="" />
            </div>
            <div className="Section_caruse_item_text" style={{background:"#FF0000"}}>
              <div className="Section_caruse_item_tarix;">
                Son Gün <span>28 Şubat</span>
              </div>
              <div className="Section_caruse_item_text_basliq">
                <span>2.000 TL'ye </span>varan Bankkart Lira!
              </div>
              <div className="Section_caruse_item_text_end">
                <p>
                Ziraat kartınızla 7.500TL–12.500TL arasındaki alışverişinize
                <b>750TL</b>, 12.500TL–19.999TL alışverişinize <b>1.250TL</b>,
                20.000TL ve üzeri işlemlerinize<b> 2.000TL Bankkart Lira!</b>
              </p>
              </div>
              
              <Link to={"/"}><button className="firsthome_carusel_button">Otelleri İncele <span><AiOutlineArrowRight /></span></button></Link>
            </div>
          </div>
        </div>
        <div className="Section_caruse_items">
          <div className="Section_caruse_item">
            <div className="Section_caruse_item_img">
              <img src={kayakotellogo} alt="" />
            </div>
            <div className="Section_caruse_item_text" style={{background:"#FF5500"}}>
              
              <div className="Section_caruse_item_text_basliq">
                Kayak Otellerinde Fırsatlar Devam Ediyor!
              </div>
              <div className="Section_caruse_item_text_end">
                <p>
                <b>%45</b>'e varan İndirim
              </p>
              <p>
                <b>5 Ay Erteleme</b>
              </p>
              <p>
                Şimdi <b>4'te 1'ini</b> Öde
              </p>
              </div>
              
              <Link to={"/"}><button className="firsthome_carusel_button">Fırsatları Gör<span><AiOutlineArrowRight /></span></button></Link>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="firsthome_cards">
        <div className="firsthome_card">
            <div className="firsthome_card_text">
                <span>Sevgililer Günü Fırsatları TatilBudur'da! </span>
                <button>Otelleri İncele</button>
            </div>
            <div className="firsthome_card_img">
                <img src={sevgililergunulogo} alt="" />
            </div>

        </div>
        <div className="firsthome_card" style={{marginTop:"24px"}} >
            <div className="firsthome_card_text">
                <span> Erken Rezervasyon Tur Fırsatları! </span>
                <button>Otelleri İncele</button>
            </div>
            <div className="firsthome_card_img" >
                <img src={kurbanbayramilogo} alt="" />
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default SectionCarusel;
