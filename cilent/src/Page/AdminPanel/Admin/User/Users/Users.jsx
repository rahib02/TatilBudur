import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../../../ContextApi/Admindata";
import axios from "axios";
function Users() {
  const userdelete=(id)=>{
    axios.delete(`http://localhost:8000/login/${id}`)
    setserveruser(serveruser.filter(x=>x._id!==id))
  }
  const { serveruser } = useContext(Context);
  const { setserveruser } = useContext(Context);
  const [searchs, setsearchs] = useState("");
  const [konum, setkonum] = useState(" ");
  const searchdata = (e) => {
    setsearchs(e.target.value);
  };
  const { position } = useParams();
  let deyisenparam = position;
  useEffect(() => {
    if (position == "all_user") {
      setkonum("");
    } else {
      setkonum(position);
    }
  }, [deyisenparam]);
  return (
    <div className="adminpanel_oteller">
      <div>
        <div className="oteller_map_field_search">
          <input type="text" placeholder="Email search" onChange={searchdata} />
        </div>
      </div>
      <div className="otel_tabel">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Img</th>
              <th>Mail</th>
              <th>Status</th>
              <th>Position</th>
              <th style={{ color: "blue" }}>Setting</th>
            </tr>
          </thead>
          <tbody>
            {serveruser
              .filter((x) =>
                x.position.toLowerCase().includes(konum.toLowerCase())
              ).filter((x)=>x.email.toLowerCase().includes(searchs.toLowerCase()))
              .map((x, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">John Doe</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{x.email}</p>
                  </td>
                  <td>
                    <span className="badge badge-success rounded-pill d-inline">
                      Active
                    </span>
                  </td>
                  <td>{x.position}</td>
                  <td>
                    <button type="button" className="btn btn-outline-danger btn-rounded" style={{border:"none",paddingLeft:"0"}} data-mdb-ripple-color="dark" onClick={()=>userdelete(x._id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
