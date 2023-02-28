import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../../ContextApi/FilterTurlar";
import "./Rezervasyon.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import * as Yup from "yup";

import { HiWifi } from "react-icons/hi";
import { GiShower } from "react-icons/gi";
import { GiWoodPile } from "react-icons/gi";
import { RiSafe2Fill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";

function Rezervasyon() {
    const { rezervotel } = useParams();
    const [value, setValue] = useState();
    const [otel, setotel] = useState([]);
    const { datas } = useContext(Context);
    const [date, setdate] = useState(Date().split(" "));

    return (
        <div className="rezervasyon">
            <Formik
                initialValues={{
                    gender1: "",
                    firstName1: "",
                    lastName1: "",
                    mail1: "",
                    date1: "",
                    tc1: "",
                    gender2: "",
                    firstName2: "",
                    lastName2: "",
                    date2: "",
                    tc2: "",
                }}
                validationSchema={Yup.object({
                    gender1: Yup.string().required("Lütfen Seçiniz"),
                    gender2: Yup.string().required("Lütfen Seçiniz"),
                    firstName1: Yup.string()
                        .required("Ad daxil edin")
                        .min(3, "Daha uzun ad daxil edin"),
                    firstName2: Yup.string()
                        .required("Ad daxil edin")
                        .min(3, "Daha uzun ad daxil edin"),
                    lastName1: Yup.string()
                        .required("Soyad daxil edin")
                        .min(3, "Daha uzun ad daxil edin"),
                    lastName2: Yup.string()
                        .required("Soyad daxil edin")
                        .min(3, "Daha uzun ad daxil edin"),

                    mail1: Yup.string().email().required("E-Posta hesbi daxil edin"),
                    date1: Yup.date().required("Dogum tarihinizi daxil edin"),
                    tc1: Yup.string().required("Kimlik bilgileriniz"),
                    date2: Yup.date().required("Dogum tarihinizi daxil edin"),
                    tc2: Yup.string().required("Kimlik bilgileriniz"),
                })}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <div className="rezervasyon_width">
                        <div className="rezervasyon_otel_mobil">
                            {datas
                                .filter((x, index) =>
                                    x.oteltext.toLowerCase().includes(rezervotel.toLowerCase())
                                )
                                .map((x, index) => (
                                    <div key={index}>
                                        <div className="rezervasyon_otel_header">
                                            <h3>{x.oteltext}</h3>
                                            <div className="rezervasyon_otel_header_span">
                                                {x.oteltitle.map((y) =>
                                                    Object.values(y).map((z, index) => (
                                                        <span key={index}>{z}</span>
                                                    ))
                                                )}
                                            </div>
                                            <div className="rezervasyon_otel_header_daxil">
                                                {x.oteldahil}
                                            </div>
                                        </div>
                                        <div className="rezervasyon_otel_img">
                                            <div>
                                                <img src={x.otelimg} alt="" />
                                            </div>
                                            <span>Ekonomik Oda</span>
                                        </div>
                                        <div className="rezervasyon_otel_daxil">
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
                                    </div>
                                ))}
                        </div>
                        <div className="rezervasyon_misafir">
                            <div className="misafir_text">
                                <h6>Misafir Bilgileri</h6>
                                <p>Otelde konaklayacak kişiye ait bilgileri doldurun.</p>
                            </div>
                            <div className="misafir_text_esas">
                                <div className="misafir_esas">
                                    <h5>1.Kişi</h5>
                                    <div className="misafir_gender">
                                        <Field type="radio" name="gender1" value="Erkek" />
                                        <label>Erkek</label>

                                        <Field type="radio" name="gender1" value="Kadın" />
                                        <label>Kadın</label>
                                        <div className="errormesagge">
                                            <ErrorMessage name="gender1" />
                                        </div>
                                    </div>
                                    <div className="misafir_detail">
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field
                                                    name="firstName1"
                                                    type="text"
                                                    placeholder="Adınız*"
                                                />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="firstName1" />
                                            </div>
                                        </div>
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field
                                                    name="lastName1"
                                                    type="text"
                                                    placeholder="Soyadınız*"
                                                />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="lastName1" />
                                            </div>
                                        </div>

                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field
                                                    name="mail1"
                                                    type="email"
                                                    placeholder="E-Posta"
                                                />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="mail1" />
                                            </div>
                                        </div>
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field name="date1" type="date" />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="date1" />
                                            </div>
                                        </div>
                                        <div className="misafir_detal_items">
                                            <div>
                                                {" "}
                                                <PhoneInput
                                                    international
                                                    countryCallingCodeEditable={false}
                                                    defaultCountry="TR"
                                                    value={value}
                                                    onChange={setValue}
                                                />
                                            </div>
                                        </div>
                                        <div className="errormessage">
                                            <ErrorMessage name="phone1" />
                                        </div>
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field
                                                    name="tc1"
                                                    type="text"
                                                    placeholder="TC Kimlink Numarası* "
                                                />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="tc1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="misafir_esas">
                                    <h5>2.Kişi</h5>
                                    <div className="misafir_gender">
                                        <Field type="radio" name="gender2" value="Erkek" />
                                        <label>Erkek</label>

                                        <Field type="radio" name="gender2" value="Kadın" />
                                        <label>Kadın</label>
                                        <div className="errormesagge">
                                            <ErrorMessage name="gender2" />
                                        </div>
                                    </div>
                                    <div className="misafir_detail">
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field
                                                    name="firstName2"
                                                    type="text"
                                                    placeholder="Adınız*"
                                                />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="firstName2" />
                                            </div>
                                        </div>
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field
                                                    name="lastName2"
                                                    type="text"
                                                    placeholder="Soyadınız*"
                                                />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="lastName2" />
                                            </div>
                                        </div>
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field name="date2" type="date" />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="date2" />
                                            </div>
                                        </div>
                                        <div className="misafir_detal_item">
                                            <div>
                                                <Field
                                                    name="tc2"
                                                    type="text"
                                                    placeholder="TC Kimlink Numarası* "
                                                />
                                            </div>
                                            <div className="errormessagge">
                                                <ErrorMessage name="tc2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="rezervasyon_otel">
                            {datas
                                .filter((x, index) =>
                                    x.oteltext.toLowerCase().includes(rezervotel.toLowerCase())
                                )
                                .map((x, index) => (
                                    <div key={index}>
                                        <div className="rezervasyon_otel_header">
                                            <h3>{x.oteltext}</h3>
                                            <div className="rezervasyon_otel_header_span">
                                                {x.oteltitle.map((y) =>
                                                    Object.values(y).map((z, index) => (
                                                        <span key={index}>{z}</span>
                                                    ))
                                                )}
                                            </div>
                                            <div className="rezervasyon_otel_header_daxil">
                                                {x.oteldahil}
                                            </div>
                                        </div>
                                        <div className="rezervasyon_otel_img">
                                            <div>
                                                <img src={x.otelimg} alt="" />
                                            </div>
                                            <span>Ekonomik Oda</span>
                                        </div>
                                        <div className="rezervasyon_otel_daxil">
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
                                        <div className="rezervasyon_otel_tarih">
                                            {
                                                <ul>
                                                    <li>
                                                        <FcApproval /> Giriş Tarihi: {date[2]} {date[1]}{" "}
                                                        {date[3]}{" "}
                                                    </li>
                                                    <li>
                                                        <FcApproval /> Çıkış Tarihi:{Number(date[2]) + 4}{" "}
                                                        {date[1]} {date[3]}
                                                    </li>
                                                    <li>
                                                        <FcApproval /> 2 Yetişkin , 4 Gece
                                                    </li>
                                                </ul>
                                            }
                                        </div>
                                        <div className="rezervasyon_otel_price">
                                            <h3>Fiyat Özeti</h3>
                                            <h4>
                                                TOPLAM FİYAT <span>{x.otelqiymet} ₺</span>
                                            </h4>
                                        </div>
                                         <div className="rezervasyon_otel_btn">
                                <button type="submit">Rezervasyon Yap</button>
                            </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Rezervasyon;
