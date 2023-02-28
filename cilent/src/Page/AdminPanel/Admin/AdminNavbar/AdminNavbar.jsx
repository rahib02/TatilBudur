import React from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import { RiArrowDownSFill, RiAdminFill } from "react-icons/ri";
import logo from "../../../../img/tatilbudurcom-logo.png";
import axios from "axios";
import { useState,useContext,useEffect } from "react";
import { Context } from "../../../../ContextApi/Admindata";
function AdminNavbar() {
  const {setserverdata}=useContext(Context)
  const {setserveruser}=useContext(Context)
  const user= JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
   axios.get("http://localhost:8000/butunturlar")
   .then(res=>setserverdata(res.data))
  }, [])
   useEffect(() => {
   axios.get("http://localhost:8000/login")
   .then(res=>setserveruser(res.data))
  }, [])
  const [otels, setotels] = useState(false);
  const [users, setusers] = useState(false);
  const [filter, setfilter] = useState(false);
  const [adminuser, setadminuser] = useState(false);
  const ul_button = (x) => {
    if (x == "otels") {
      if (otels === false) {
        document.getElementById("page_otels").style.display = "flex";
        document.getElementById("otelsbutton").style.transform =
          "rotate(180deg)";
        setotels(true);
      } else {
        document.getElementById("page_otels").style.display = "none";
        document.getElementById("otelsbutton").style.transform =
          "rotate(0deg)";
        setotels(false);
      }
    }
    else if (x=="otel_filter"){
         if (filter === false) {
        document.getElementById("page_filter").style.display = "flex";
        document.getElementById("filterbutton").style.transform =
          "rotate(180deg)";
        setfilter(true);
      } else {
        document.getElementById("page_filter").style.display = "none";
        document.getElementById("filterbutton").style.transform =
          "rotate(0deg)";
        setfilter(false);
      }
    }
    else if (x=="user_filter"){
         if (users === false) {
        document.getElementById("page_user").style.display = "flex";
        document.getElementById("usersbutton").style.transform =
          "rotate(180deg)";
        setusers(true);
      } else {
        document.getElementById("page_user").style.display = "none";
        document.getElementById("usersbutton").style.transform =
          "rotate(0deg)";
        setusers(false);
      }
    }
     else if (x=="user_admin"){
         if (adminuser === false) {
        document.getElementById("adminuser").style.display = "flex";
        document.getElementById("adminuserbutton").style.transform =
          "rotate(180deg)";
        setadminuser(true);
      } else {
        document.getElementById("adminuser").style.display = "none";
        document.getElementById("adminuserbutton").style.transform =
          "rotate(0deg)";
        setadminuser(false);
      }
    }
  };
  return (
    <div className="adminnavbar">
      <div className="adminnavbar_logo">
        <img src={logo} alt="" />
      </div>
      <div className="adminnavbar_admin_mail">
        <div className="adminnavbar_admin_mail_logo">
          <RiAdminFill />
        </div>
        <div className="adminnavbar_admin_mail_adress">{user.email}</div>
      </div>
      <div className="adminnavbar_pages">
        <div className="adminnavbar_page_oteller">
          <div className="adminnavbar_page_oteller_header">
            Otels
            <button id="otelsbutton" onClick={() => ul_button("otels")}>
              <RiArrowDownSFill />
            </button>
          </div>
          <div className="adminnavbar_page_oteller_body" id="page_otels">
            <ul>
              <li>
                <Link to={"otels/all_otel"}>All Otels</Link>
              </li>
              <li>
                <div>
                  Otel Filter
                  <button onClick={() => ul_button("otel_filter")} id="filterbutton">
                    <RiArrowDownSFill />
                  </button>
                </div>
                <div id="page_filter">
                  <ul>
                    <li>
                      <Link to={"otels/Yurtiçi Oteller"}>Yurtiçi Oteller</Link>
                    </li>
                    <li>
                      <Link to={"otels/Kış Oteller"}>Kış Otelleri</Link>
                    </li>
                    <li>
                      <Link to={"otels/Termal Oteller"}>Termal Oteller</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to={"oteladd"}>Otel Add</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="adminnavbar_page_user">
          <div className="adminnavbar_page_user_header">
            Users
            <button onClick={()=>ul_button("user_filter")} id="usersbutton">
              <RiArrowDownSFill />
            </button>
          </div>
          <div className="adminnavbar_page_user_body" id="page_user">
            <ul>
              <li>
                <Link to={"user/all_user"}>All Users</Link>
              </li>
              <li>
                <div>
                  User Filter
                  <button onClick={()=>ul_button("user_admin")} id="adminuserbutton">
                    <RiArrowDownSFill />
                  </button>
                </div>
                <div id="adminuser">
                  <ul>
                    <li>
                      <Link to={"user/admin"}>Admins</Link>
                    </li>
                    <li>
                      <Link to={"user/user"}>Users</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to={"useradd"}>User Add</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
