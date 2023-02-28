import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import tatilbudurlogo from "../../../img/tatilbudurcom-logo.png";
import { Context } from "../../../ContextApi/FilterTurlar";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUserSlash } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
function Navbar() {
  const { setdatas } = useContext(Context);
  const { user } = useContext(Context);
  const { setuser } = useContext(Context);
  const logout = () => {
    setuser([]);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/butunturlar")
      .then((res) => setdatas(res.data));
  }, []);
  const [otelbtnvalue, setotelbtnvalue] = useState(true);
  const otelbtn = () => {
    if (otelbtnvalue === true) {
      document.getElementById("otel_super_menu").style.display = "flex";
      document.getElementById("tatilbudur_navbar_otel_icon").style.transform =
        "rotate(180deg)";
      setotelbtnvalue(false);
    } else {
      document.getElementById("otel_super_menu").style.display = "none";
      document.getElementById("tatilbudur_navbar_otel_icon").style.transform =
        "rotate(0deg)";
      setotelbtnvalue(true);
    }
  };
  const [yurtici, setyurtici] = useState(true);
  const [kis, setkis] = useState(true);
  const [termal, settermal] = useState(true);
  const [burgeryurtici, setburgeryurtici] = useState(true);
  const [burgerkis, setburgerkis] = useState(true);
  const [burgertermal, setburgertermal] = useState(true);
  const otelshow = (x) => {
    if (x === "yurtici") {
      if (yurtici === true) {
        document.getElementById("yurticiicon").style.transform =
          "rotate(90deg)";
        document.getElementById("yurticicoteller").style.display = "none";
        document.getElementById("kisotelleri").style.display = "none";
        document.getElementById("termaloteller").style.display = "none";
        setyurtici(false);
      } else {
        document.getElementById("yurticiicon").style.transform = "rotate(0deg)";
        document.getElementById("yurticicoteller").style.display = "flex";
        setyurtici(true);
      }
    } else if (x === "kis") {
      if (kis === true) {
        document.getElementById("kisicon").style.transform = "rotate(270deg)";
        document.getElementById("kisotelleri").style.display = "flex";
        document.getElementById("yurticicoteller").style.display = "none";
        document.getElementById("termaloteller").style.display = "none";
        setkis(false);
      } else {
        document.getElementById("kisicon").style.transform = "rotate(0deg)";
        document.getElementById("kisotelleri").style.display = "none";
        setkis(true);
      }
    } else if (x === "termal") {
      if (termal === true) {
        document.getElementById("termalicon").style.transform =
          "rotate(270deg)";
        document.getElementById("termaloteller").style.display = "flex";
        document.getElementById("yurticicoteller").style.display = "none";
        document.getElementById("kisotelleri").style.display = "none";

        settermal(false);
      } else {
        document.getElementById("termalicon").style.transform = "rotate(0deg)";
        document.getElementById("termaloteller").style.display = "none";
        settermal(true);
      }
    }
  };
  const burger_menu = (x) => {
    if (x === "yurtici") {
      if (burgeryurtici === true) {
        document.getElementById("burger_menu_yurtici").style.display = "flex";
        document.getElementById("burger_menu_kis").style.display = "none";
        document.getElementById("burger_menu_termal").style.display = "none";
        setburgeryurtici(false);
      } else {
        document.getElementById("burger_menu_yurtici").style.display = "none";
        setburgeryurtici(true);
      }
    } else if (x === "kis") {
      if (burgerkis === true) {
        document.getElementById("burger_menu_kis").style.display = "flex";
        document.getElementById("burger_menu_yurtici").style.display = "none";
        document.getElementById("burger_menu_termal").style.display = "none";
        setburgerkis(false);
      } else {
        document.getElementById("burger_menu_kis").style.display = "none";
        setburgerkis(true);
      }
    } else if (x === "termal") {
      if (burgertermal === true) {
        document.getElementById("burger_menu_termal").style.display = "flex";
        document.getElementById("burger_menu_yurtici").style.display = "none";
        document.getElementById("burger_menu_kis").style.display = "none";
        setburgertermal(false);
      } else {
        document.getElementById("burger_menu_termal").style.display = "none";
        setburgertermal(true);
      }
    }
  };
  const [show,setshow]=useState(true)
  const burger_show=()=>{
   if (show === true) {
        document.getElementById("burgers_menu").style.display = "flex";
        setshow(false);
      } else {
        document.getElementById("burgers_menu").style.display = "none";
        setshow(true);
      }
  }


  return (
    <>
      <div className="tatilbudur_navbar">
        <div className="tatilbudur_navbar_companents">
          <div className="tatilbudur_navbar_logo">
            <Link to={"/"}>
              <img src={tatilbudurlogo} alt="" />
            </Link>
          </div>
          <div className="tatilbudur_navbar_otel_turlar">
            <ul className="tatilbudur_navbar_otel_turlar_ul">
              <li className="tatilbudur_navbar_otel">
                <div className="tatilbudur_navbar_otel_menyu_header">
                  <button
                    onClick={otelbtn}
                    className="tatilbudur_navbar_otel_menyu_header_btn"
                  >
                    Otel
                    <div id="tatilbudur_navbar_otel_icon">
                      <AiOutlineDown />
                    </div>
                  </button>
                </div>
                <div
                  className="tatilbudur_navbar_otel_menyu"
                  id="otel_super_menu"
                >
                  <div className="otel_menyu_left">
                    <ul className="menyu_left_ul">
                      <li>
                        <Link to={"oteller/Yurtiçi Oteller"} onClick={otelbtn}>
                          <div className="menyu_left_ul_img">
                            <img
                              src="https://cdn.tatilbudur.net/banner/2022-06/origin/yurtici-oteller-1654607210.png"
                              alt=""
                            />
                          </div>
                          <div className="menyu_left_ul_text">
                            Yurtiçi Oteller
                          </div>
                        </Link>
                        <div id="yurticiicon">
                          <button onClick={() => otelshow("yurtici")}>
                            {" "}
                            <IoIosArrowForward />
                          </button>
                        </div>
                      </li>
                      <li>
                        <Link to={"oteller/Kış Oteller"} onClick={otelbtn}>
                          <div className="menyu_left_ul_img">
                            <img
                              src="https://cdn.tatilbudur.net/banner/2022-06/origin/yurtici-oteller-1654607210.png"
                              alt=""
                            />
                          </div>
                          <div className="menyu_left_ul_text">Kış Oteller</div>
                        </Link>
                        <div id="kisicon">
                          <button onClick={() => otelshow("kis")}>
                            {" "}
                            <div>
                              <IoIosArrowDown />
                            </div>
                          </button>
                        </div>
                      </li>
                      <li>
                        <Link to={"oteller/Termal Oteller"} onClick={otelbtn}>
                          <div className="menyu_left_ul_img">
                            <img
                              src="https://cdn.tatilbudur.net/banner/2022-06/origin/yurtici-oteller-1654607210.png"
                              alt=""
                            />
                          </div>
                          <div className="menyu_left_ul_text">
                            Termal Oteller
                          </div>
                        </Link>
                        <div id="termalicon">
                          <button onClick={() => otelshow("termal")}>
                            {" "}
                            <div>
                              <IoIosArrowDown />
                            </div>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="otel_menyu_right">
                    <div className="otel_menyu_right_oteller">
                      <div
                        className="otel_menyu_right_text"
                        id="yurticicoteller"
                      >
                        <div>
                          <Link
                            to={"oteller/Yurtiçi Oteller/Antalya Oteller"}
                            onClick={otelbtn}
                          >
                            Antalya Oteller
                          </Link>
                          <Link
                            to={"oteller/Yurtiçi Oteller/Bodrum Otelleri"}
                            onClick={otelbtn}
                          >
                            Bodrum Otelleri
                          </Link>
                          <Link
                            to={"oteller/Yurtiçi Oteller/Alanya Otelleri"}
                            onClick={otelbtn}
                          >
                            Alanya Otelleri
                          </Link>
                          <Link
                            to={"oteller/Yurtiçi Oteller/Marmaris Otelleri"}
                            onClick={otelbtn}
                          >
                            Marmaris Otelleri
                          </Link>
                        </div>
                        <div>
                          <img src="" alt="" />
                        </div>
                      </div>
                      <div className="otel_menyu_right_text" id="kisotelleri">
                        <div>
                          <Link
                            to={"oteller/Kış Oteller/Kayak Otelleri"}
                            onClick={otelbtn}
                          >
                            Kayak Otelleri
                          </Link>
                          <Link
                            to={"oteller/Kış Oteller/Uludağ Otelleri"}
                            onClick={otelbtn}
                          >
                            Uludağ Otelleri
                          </Link>
                          <Link
                            to={"oteller/Kış Oteller/Palandöken Otelleri"}
                            onClick={otelbtn}
                          >
                            Palandöken Otelleri
                          </Link>
                          <Link
                            to={"oteller/Kış Oteller/Sarıkamış Otelleri"}
                            onClick={otelbtn}
                          >
                            Sarıkamış Otelleri
                          </Link>
                        </div>
                      </div>
                      <div className="otel_menyu_right_text" id="termaloteller">
                        <div>
                          <Link
                            to={"oteller/Termal Oteller/Yalova Termal Oteller"}
                            onClick={otelbtn}
                          >
                            Yalova Termal Oteller
                          </Link>
                          <Link
                            to={"oteller/Termal Oteller/Bursa Termal Oteller"}
                            onClick={otelbtn}
                          >
                            Bursa Termal Oteller
                          </Link>
                          <Link
                            to={
                              "oteller/Termal Oteller/Balıkesir Termal Oteller"
                            }
                            onClick={otelbtn}
                          >
                            Balıkesir Termal Oteller
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="otel_menyu_right_oteller_img"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="tatilbudur_navbar_contact_login">
            <ul className="tatilbudur_navbar_contact_login_ul">
              <li className="tatilbudur_navbar_phone">
                <Link to={"/phone"}>
                  <span>
                    <BsHeadset />
                  </span>
                  Sizi Arayalım
                </Link>
              </li>
              <li className="tatilbudur_navbar_map">
                <Link to={"/otelmap"}>
                  <span>
                    <BiMap />
                  </span>
                  Satış Ofisleri
                </Link>
              </li>
              <li className="tatilbudur_navbar_login">
                {user == "" ? (
                  <Link to={"/login"}>Giriş Yapın</Link>
                ) : (
                  <span className="user_logout_button" onClick={logout}>
                    {user.email}
                  </span>
                )}
              </li>
            </ul>
          </div>
          <div className="tatilbudur_navbar_burger_menu_btn">
            <button onClick={burger_show}>
              <AiOutlineMenuUnfold />
            </button>
          </div>
        </div>
        <div className="tatilbudur_navbar_burger_menu" id="burgers_menu">
          <div>
            {user == "" ? (
              <Link to={"/login"}>
                <FaUserSlash /> <span style={{marginLeft:"15px"}}>Giriş Yapın</span>
              </Link>
            ) : (
              <span className="user_logout_button" onClick={logout}>
          <FaUserAlt /> <span style={{marginLeft:"15px"}}>{user.email} Çıkış Yapın</span>
              </span>
            )}
          </div>
          <div className="burger_menu_oteller">
            <div><h6>
              <FaHotel /> <span style={{marginLeft:"15px"}}>Otel</span>
            </h6></div>
            <div><ul>
              <li>
               <div onClick={()=>burger_menu("yurtici")} className="burger_menu_oteller_img" ><span><img
                              src="https://cdn.tatilbudur.net/banner/2022-06/origin/yurtici-oteller-1654607210.png"
                              alt=""
                            /><span>Yurtiçi Oteller</span></span><span><IoIosArrowDown/></span></div>
                <div className="burger_menu_oteller_link" id="burger_menu_yurtici">
                  <ul>
                    <li><Link
                            to={"oteller/Yurtiçi Oteller/Antalya Oteller"}
                          >
                            Antalya Oteller
                          </Link></li>
                    <li><Link
                            to={"oteller/Yurtiçi Oteller/Bodrum Otelleri"}
                          >
                            Bodrum Otelleri
                          </Link></li>
                    <li><Link
                            to={"oteller/Yurtiçi Oteller/Alanya Otelleri"}  
                          >
                            Alanya Otelleri
                          </Link></li>
                     <li><Link
                            to={"oteller/Yurtiçi Oteller/Marmaris Otelleri"}
                          >
                            Marmaris Otelleri
                          </Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <div onClick={()=>burger_menu("kis")}  className="burger_menu_oteller_img"><span><img
                              src="https://cdn.tatilbudur.net/banner/2022-06/origin/yurtici-oteller-1654607210.png"
                              alt=""
                            /><span>Kış Oteller</span></span><span><IoIosArrowDown/></span></div>
                <div className="burger_menu_oteller_link" id="burger_menu_kis">
                  <ul>
                    <li><Link
                            to={"oteller/Kış Oteller/Kayak Otelleri"}                          >
                            Kayak Otelleri
                          </Link></li>
                    <li><Link
                            to={"oteller/Kış Oteller/Uludağ Otelleri"}                          >
                            Uludağ Otelleri
                          </Link></li>
                    <li><Link
                            to={"oteller/Kış Oteller/Palandöken Otelleri"}
                          >
                            Palandöken Otelleri
                          </Link></li>
                     <li><Link
                            to={"oteller/Kış Oteller/Sarıkamış Otelleri"}
                          >
                            Sarıkamış Otelleri
                          </Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <div onClick={()=>burger_menu("termal")} className="burger_menu_oteller_img"><span><img
                              src="https://cdn.tatilbudur.net/banner/2022-06/origin/yurtici-oteller-1654607210.png"
                              alt=""
                            /><span>Termal Oteller</span></span><span><IoIosArrowDown/></span></div>
                <div className="burger_menu_oteller_link" id="burger_menu_termal">
                  <ul>
                    <li><Link
                            to={"oteller/Termal Oteller/Yalova Termal Oteller"}
                          >
                            Yalova Termal Oteller
                          </Link></li>
                    <li><Link
                            to={"oteller/Termal Oteller/Bursa Termal Oteller"}
                          >
                            Bursa Termal Oteller
                          </Link></li>
                    <li><Link
                            to={
                              "oteller/Termal Oteller/Balıkesir Termal Oteller"
                            }
                          >
                            Balıkesir Termal Oteller
                          </Link></li>
                  </ul>
                </div>
              </li>
            </ul></div>
          </div>
          <div className="burger_menu_contact">
              <div><Link to={"/phone"}>
                  <span style={{marginRight:"10px"}}>
                    <BsHeadset />
                  </span>
                  Sizi Arayalım
                </Link></div>
          </div>
          <div><Link to={"/otelmap"}>
                  <span style={{marginRight:"10px"}}>
                    <BiMap />
                  </span>
                  Satış Ofisleri
                </Link></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
