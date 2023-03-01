import React from 'react'
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useContext } from "react";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { HiWifi } from "react-icons/hi";
import { GiShower } from "react-icons/gi";
import { GiWoodPile } from "react-icons/gi";
import { RiSafe2Fill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPercentage } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { BiRun } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { AiOutlineReconciliation } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { Context } from '../../../../../ContextApi/Admindata';
import { useParams } from "react-router-dom";
function Otelview() {
    const{id}=useParams()
    const {serverdata}=useContext(Context)
  return (
    <div className="otelincele">
      <div className="otelincele_width">
        {serverdata
          .filter((x) =>
            x._id==id
          )
          .map((x, index) => (
            <div key={index} className="otelincele_map">
              <div className="otelincele_map_img">
                <div>
                  <ReactPlayer
                    url="https://youtu.be/j19_7iuCngQ"
                    width={600}
                    height={320}
                    loop={true}
                    controls={true}
                  />
                </div>
                <div className="otelincele_map_img_otelimg">
                  <span className="otelincele_map_img_otelimg_span">
                    {<img src={x.otelimg} alt="" />}
                  </span>
                  {x.otelpaket.map((x) =>
                    Object.values(x).map((y, index) => (
                      <span
                        key={index}
                        className="otelincele_map_img_otelimg_span"
                      >
                        <img src={y.odaimg} alt="" />
                      </span>
                    ))
                  )}
                </div>
              </div>
              <div className="otelincele_map_img_mobile">
                {<img src={x.otelimg} alt="" />}
              </div>
              <div className="otelincele_map_rotate">
                <div className="otelincele_map_rotate_otelname">
                  <h1>{x.oteltext}</h1>
                </div>
              </div>
              <div className="otelincele_map_details">
                <div className="otelincele_map_details_kullaniciyorum">
                  <div className="otelincele_map_details_otelyorum">
                    <div className="otelincele_kullaniciyorumu">
                      <h6>Kullanıcı Yorumları</h6>
                    </div>
                    <div className="otelincele_stars">
                      <span className="span_stars">{x.otelstar}/10 </span>
                      <span className="span_fevkalade">FEVKALADE</span>
                    </div>
                    <div className="oteincele_point">
                      <span>
                        <MdOutlineBedroomParent /> Oda {x.otelstar}
                      </span>
                      <span>
                        <GiKnifeFork /> Yemekler {x.otelstar}
                      </span>
                      <span>
                        <BsStars /> Hizmet {x.otelstar}
                      </span>
                      <span>
                        <BiMap /> Fiyat Performans {x.otelstar}
                      </span>
                    </div>
                    <div className="otelincele_onecikan">
                      <h6>Öne Çıkan Özellikler</h6>
                      <div className="otelincele_onecikan_text">
                        {x.otelekstra.map((x) =>
                          Object.values(x).map((y, index) => (
                            <div key={index}>{y}</div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="otelincele_map_details_odalar">
                  {x.otelpaket.map((y) =>
                    Object.values(y).map((z, index) => (
                      <div key={index}>
                        <div className="odalarpaket" key={index}>
                          <div className="odalarpaket_img">
                            <h5>Oda</h5>
                            <img src={z.odaimg} alt="" />
                          </div>
                          <div className="odalarpaket_text">
                            <div className="odalarpaket_text_icon">
                              <span>
                                <HiWifi /> Wifi
                              </span>
                              <span>
                                <GiShower /> Duş
                              </span>
                              <span>
                                <GiWoodPile /> Parke Zemin
                              </span>
                              <span>
                                <RiSafe2Fill /> Emanet Kasa
                              </span>
                            </div>
                            <div className="odalarpaket_text_daxilolan">
                              {x.oteldahil}
                            </div>
                            <div className="odalarpaket_text_price">
                              <div className="odalarpaket_text_price_people">
                                2 Yetişkin 4 Gece <b>Toplam Fiyat</b>
                              </div>
                              <div className="odalarpaket_text_price_qiymet">
                                {z.odaqiymet} ₺
                              </div>
                              <div className="odalarpaket_text_price_garanti">
                                <GiReceiveMoney /> En İyi Fiyat Garantisi
                              </div>
                              <div className="odalarpaket_text_price_rezervasyon">
                                <Link to={"/rezervasyon" + "/" + x.oteltext}>
                                  <button>Rezervasyon Yap</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="otelincele_map_details_kampanyalar">
                  <div className="otelincele_kampanya_text">
                    <FaPercentage style={{ fontSize: "30px" }} /> Kampanyalar
                  </div>
                  <div className="otelincele_kampanya_kampanyalar">
                    {x.otelkampanya.map((y) =>
                      Object.values(y).map((z, index) => (
                        <div className="otelincele_kampanya_kampanyalar_text" key={index}>
                          <div className="kampanyalar_text">
                            <span>
                              <FaPercentage />
                            </span>
                            <div className="kampanyalar_text_div">
                              <h4>{z.banktext}</h4>
                              <p>{z.banktitle}</p>
                            </div>
                          </div>
                          <div className="kampanyalar_img">
                            <img
                              src="https://cdn.tatilbudur.net/banner/2022-11/origin/ziraat-bankkartinizla-tek-seferde-gerceklestireceginiz-tatil-alisverisinize-1250-tlye-varan-bankkart-lira-1667548836.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="otelincele_map_details_kampanyalar_mobile">
                  <div className="otelincele_kampanya_text">
                    <FaPercentage style={{ fontSize: "30px" }} /> Kampanyalar
                  </div>
                  <div className="otelincele_kampanya_kampanyalar">
                    {x.otelkampanya.map((y) =>
                      Object.values(y).map((z, index) => (
                        <div className="otelincele_kampanya_kampanyalar_text" key={index}>
                          <div className="kampanyalar_text">
                            <span>
                              <FaPercentage />
                            </span>
                            <div className="kampanyalar_img">
                              <img
                                src="https://cdn.tatilbudur.net/banner/2022-11/origin/ziraat-bankkartinizla-tek-seferde-gerceklestireceginiz-tatil-alisverisinize-1250-tlye-varan-bankkart-lira-1667548836.jpg"
                                alt=""
                              />
                            </div>
                            <div className="kampanyalar_text_div">
                              <h4>{z.banktext}</h4>
                              <p>{z.banktitle}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="otelincele_map_oteldekiaktiviteler">
                  <div className="otelincele_aktiviteler">
                    <div className="otelincele_aktiviteler_img">
                      <span>
                        <FaHotel />
                      </span>
                      <p>Genel Özellikler</p>
                    </div>
                    <div className="otelincele_aktiviteler_text">
                      <div className="otelincele_aktiviteler_text_div">
                        {x.otelozellik.map((y) =>
                          Object.values(y).map((z, index) => (
                            <span key={index}>{z}</span>
                          ))
                        )}
                      </div>
                      <div>* ile işaretli özellikler ücretlidir.</div>
                    </div>
                  </div>
                  <div className="otelincele_aktiviteler">
                    <div className="otelincele_aktiviteler_img">
                      <span>
                        <FaUmbrellaBeach />
                      </span>
                      <p>Havuz ve Plajı</p>
                    </div>
                    <div className="otelincele_aktiviteler_text">
                      <div className="otelincele_aktiviteler_text_div">
                        {x.otelhavuzplaj.map((y) =>
                          Object.values(y).map((z, index) => (
                            <span key={index}>{z}</span>
                          ))
                        )}
                      </div>
                      <div>* ile işaretli özellikler ücretlidir.</div>
                    </div>
                  </div>
                  <div className="otelincele_aktiviteler">
                    <div className="otelincele_aktiviteler_img">
                      <span>
                        <BiRun />
                      </span>
                      <p>Tesis Aktiviteleri</p>
                    </div>
                    <div className="otelincele_aktiviteler_text">
                      <div className="otelincele_aktiviteler_text_div">
                        {x.otelaktivite.map((y) =>
                          Object.values(y).map((z, index) => (
                            <span key={index}>{z}</span>
                          ))
                        )}
                      </div>
                      <div>* ile işaretli özellikler ücretlidir.</div>
                    </div>
                  </div>
                  <div className="otelincele_aktiviteler">
                    <div className="otelincele_aktiviteler_img">
                      <span>
                        <GiBigDiamondRing />
                      </span>
                      <p>Balayı</p>
                    </div>
                    <div className="otelincele_aktiviteler_text">
                      <div className="otelincele_aktiviteler_text_div">
                        {x.otelbalayi.map((y) =>
                          Object.values(y).map((z, index) => (
                            <span key={index}>{z}</span>
                          ))
                        )}
                      </div>
                      <div>* ile işaretli özellikler ücretlidir.</div>
                    </div>
                  </div>
                  <div className="otelincele_aktiviteler">
                    <div className="otelincele_aktiviteler_img">
                      <span>
                        <AiOutlineReconciliation />
                      </span>
                      <p>Konsept Özellikleri</p>
                    </div>
                    <div className="otelincele_aktiviteler_text">
                      <div className="otelincele_aktiviteler_text_div">
                        {x.otelkonsept.map((y) =>
                          Object.values(y).map((z, index) => (
                            <p key={index}>{z}</p>
                          ))
                        )}
                      </div>
                      <div>* ile işaretli özellikler ücretlidir.</div>
                    </div>
                  </div>
                  <div className="otelincele_aktiviteler">
                    <div className="otelincele_aktiviteler_img">
                      <span>
                        <GrNotes />
                      </span>
                      <p>Önemli Notlar</p>
                    </div>
                    <div className="otelincele_aktiviteler_text">
                      <div className="otelincele_aktiviteler_text_div">
                        {x.otelnotlar.map((y) =>
                          Object.values(y).map((z, index) => (
                            <p key={index}>{z}</p>
                          ))
                        )}
                      </div>
                      <div>* ile işaretli özellikler ücretlidir.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Otelview