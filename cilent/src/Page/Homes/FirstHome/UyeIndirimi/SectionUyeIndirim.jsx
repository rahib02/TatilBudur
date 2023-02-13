import React from "react";
import "./SectionUyeIndirim.css";
import { CgMail } from "react-icons/cg";
import apple from "../../../../img/SectionUyeIndirim/apple.svg";
import google from "../../../../img/SectionUyeIndirim/googleplay.svg";
import huawei from "../../../../img/SectionUyeIndirim/huawei.svg";
import qrcode from "../../../../img/SectionUyeIndirim/qrcode.png";
import appdeskopt from "../../../../img/SectionUyeIndirim/app.png";
/* import newslettermodel from "../../../../img/SectionUyeIndirim/newsletter-model.png";
import newslettermodel from "../../../../img/SectionUyeIndirim/newsletter-model.png";
import newslettermodel from "../../../../img/SectionUyeIndirim/newsletter-model.png";
import newslettermodel from "../../../../img/SectionUyeIndirim/newsletter-model.png";  */
import newslettermodel from "../../../../img/SectionUyeIndirim/newsletter-model.png";
import {Link} from 'react-router-dom'
function SectionUyeIndirim() {
  return (
    <div className="SectionUyeIndirim">
      <div className="SectionUyeIndirim_width">
        <div className="uyeindirim">
          <div className="uyeindirim_img">
            <img src={newslettermodel} alt="" />
          </div>
          <div className="uyeindirim_text">
            <h3>
              Üyelere özel indirimlere ve harika fiyatlara erişim sağlayın
            </h3>
            <div className="uyeindirim_text_email_sorgu">
              <div className="uyeindirim_text_email">
                <div className="uyeindirim_text_email_icon">
                  <span className="emailicon">
                    <CgMail
                      style={{
                        color: "rgb(63, 83, 108)",
                        width: 30,
                        height: 30,
                      }}
                    />
                  </span>
                  <input
                    type="email"
                    placeholder="E-Posta Adresiniz"
                    className="emailinput"
                  />
                </div>
              </div>
              <div className="uyeindirim_text_gonder">
                <div className="uyeindirim_text_gonder_button">
                  <button className="text_gonder_button">Gönder</button>
                </div>
                <div className="uyeindirim_text_gonder_box">
                    <input
                    type="checkbox"
                    id="checkbokgonder"
                    name="gonder"
                  />
                  <div><label for="gonder">%50'ye varan Fırsat ve Kampanyalardan haberdar olmak istiyorum</label></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uyeindirim_app">
          <div className="uyeindirim_app_stores">
            <div>TatilBudur uygulamasını indirin, aklınızdaki tatili hemen planlayın!</div>
            <div className="uyeindirim_app_store">
              <div className="uyeindirim_app_card">
                <Link to={"/"}>
                <div className="uyeindirim_app_card_img">
                  <img src={apple} alt="" />
                </div>
                
                  <div className="uyeindirim_app_card_text">
                  <p>App Store`dan</p>
                  <span>İndirin</span>
                </div>
                </Link>
              </div>
              <div className="uyeindirim_app_card">
                <Link to={"/"}>
                <div className="uyeindirim_app_card_img">
                  <img src={google} alt="" />
                </div>
                
                  <div className="uyeindirim_app_card_text">
                  <p>Google Play`den</p>
                  <span>İndirin</span>
                </div>
                </Link>
              </div>
              <div className="uyeindirim_app_card">
                <Link to={"/"}>
                <div className="uyeindirim_app_card_img">
                  <img src={huawei} alt="" />
                </div>
                  <div className="uyeindirim_app_card_text">
                  <p>AppGallery`den</p>
                  <span>İndirin</span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="uyeindirim_app_qr">
                      <img src={qrcode} alt="" />
                      <p></p>
          </div>
          <div  className="uyeindirim_app_mobile">
            <img src={appdeskopt} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default SectionUyeIndirim;
