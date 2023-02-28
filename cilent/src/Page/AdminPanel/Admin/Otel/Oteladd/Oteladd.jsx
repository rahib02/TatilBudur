import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "./Oteladd.css";
import axios from "axios";

function Oteladd() {
  return (
    <div className="oteladd">
      <h4 style={{ color: "yellowgreen" }}>Otel Add</h4>
       <h5 style={{color:"orange"}}>Narıncı rengde olannar isdeye gore artırıla biler </h5>
      <Formik
        initialValues={{
          otelcatecory: "",
          otelkonum: "",
          otelimg: "",
          otelname: "",
          oteltitle1: "",
          oteltitle2: "",
          oteltitle3: "",
          oteldahil: "",
          otelekstra: "",
          otelstar: "",
          otelqiymet: "",
          otelpaket: "",
          otelkampanya: "",
          otelozellik: "",
          otelaktivite: "",
          otelhavuzplaj: "",
          otelbalayi: "",
          otelkonsept: "",
          otelnotlar: "",
        }}
        validationSchema={Yup.object({
          otelcatecory: Yup.string().required("Boş Saxlamayın"),
          otelkonum: Yup.string().required("Boş Saxlamayın"),
          otelimg: Yup.string().required("Boş Saxlamayın"),
          otelname: Yup.string().required("Boş Saxlamayın"),
          oteltitle1: Yup.string().required("Boş Saxlamayın"),
          oteltitle2: Yup.string().required("Boş Saxlamayın"),
          oteltitle3: Yup.string().required("Boş Saxlamayın"),
          oteldahil: Yup.string().required("Boş Saxlamayın"),
          otelstar: Yup.number().typeError("Ədəd Yazın").required("Boş Saxlamayın"),
          otelqiymet: Yup.number().typeError("Ədəd Yazın").required("Boş Saxlamayın"),
          otelekstra: Yup.array().of(
          Yup.string().required("Boş Saxlamayın")),
          otelozellik: Yup.array().of(
          Yup.string().required("Boş Saxlamayın")),
          otelaktivite: Yup.array().of(
          Yup.string().required("Boş Saxlamayın")),
          otelbalayi: Yup.array().of(
          Yup.string().required("Boş Saxlamayın")),
          otelnotlar: Yup.array().of(
          Yup.string().required("Boş Saxlamayın")),
          otelhavuzplaj: Yup.array().of(
          Yup.string().required("Boş Saxlamayın")),
          otelkonsept: Yup.array().of(
          Yup.string().required("Boş Saxlamayın")),
          otelpaket: Yup.array().of(
          Yup.object().shape({
            odaimg: Yup.string().required("Boş Saxlamayın"),
            odaqiymet: Yup.number().typeError("Ədəd Yazın")
              .required("Boş Saxlamayın")
          })
        )

        })}
        onSubmit={(values) => {
          axios.post("http://localhost:8000/butunturlar",{
              otel: values.otelcatecory,
              otelkonum: values.otelkonum,
              otelimg: values.otelimg,
              oteltext: values.otelname,
              oteltitle: {
                1: values.oteltitle1,
                2: values.oteltitle2,
                3: values.oteltitle3,
              },
              oteldahil: values.oteldahil,
              otelekstra: values.otelekstra.map((x,index)=>(
          index=x
         )),
              otelstar: values.otelstar,
              otelqiymet: values.otelqiymet,
              otelpaket: values.otelpaket,
              otelkampanya: [
                {
                  Ziraat: {
                    bankimg: "",
                    banktext:
                      "Ziraat Bankkart'ınızla tek seferde gerçekleştireceğiniz tatil alışverişinize 2.000 TL'ye varan Bankkart Lira!",
                    banktitle:
                      "Ziraat kartınızla 7.500TL–12.500TL arasındaki alışverişinize 750TL, 12.500TL–19.999TL alışverişinize 1.250TL, 20.000TL ve üzeri işlemlerinize 2.000TL Bankkart Lira!",
                  },
                  Maximum: {
                    bankimg: "",
                    banktext:
                      "TatilBudur'dan Maximum Kart ile şimdi al, 5 ay sonra öde!",
                    banktitle:
                      "TatilBudur'da %50'ye varan indirimlerle Efsane Şubat Fırsatları başladı. Üstelik Maximum Kart'a özel 3,6 ve 9 taksitli (Kıbrıs Otelleri için sadece 3 taksitli) rezervasyonlarınızın ödemesini 5 ay erteleyebilirsiniz.",
                  },
                  World: {
                    bankimg: "",
                    banktext:
                      "TatilBudur'dan World Kart ile şimdi al, 4 ay sonra öde!",
                    banktitle:
                      "TatilBudur'da %50'ye varan indirimlerle Efsane Şubat Fırsatları başladı. Üstelik World Kart'a özel 3, 6 ve 9 taksitli rezervasyonlarınızın ödemesini 4 ay erteleyebilirsiniz.",
                  },
                },
              ],
              otelozellik:values.otelozellik.map((x,index)=>(
          index=x
         )),
              otelaktivite: values.otelaktivite.map((x,index)=>(
          index=x
         )),
              otelhavuzplaj: values.otelhavuzplaj.map((x,index)=>(
          index=x
         )),
              otelbalayi: values.otelbalayi.map((x,index)=>(
          index=x
         )),
              otelkonsept: values.otelkonsept.map((x,index)=>(
          index=x
         )),
              otelnotlar: values.otelnotlar.map((x,index)=>(
          index=x
         )),
            },)
        }}
        render={({ values }) => (
          <Form className="form">
           
            <div className="oteladd_category">
              <h5>Otel Category</h5>
              <label>
                <Field
                  type="radio"
                  name="otelcatecory"
                  value="Yurtiçi Oteller"
                />
                Yurtiçi Oteller
              </label>
              <label>
                <Field type="radio" name="otelcatecory" value="Kış Oteller" />
                Kış Otelleri
              </label>
              <label>
                <Field
                  type="radio"
                  name="otelcatecory"
                  value="Termal Oteller"
                />
                Termal Oteller
              </label>
              <div className="errormessage"><ErrorMessage name="otelcatecory"/></div>
            </div>
            <div className="oteladd_fulllocation">
              <h5>Full Location</h5>
              <div className="oteladd_fulllocation_div">
                <div className="fulllocation">
                  <Field
                    type="text"
                    name="oteltitle1"
                    placeholder="Otel City"
                  />
                  <div className="errormessage"><ErrorMessage name="oteltitle1"/></div>
                </div>
                <div className="fulllocation">
                  <Field
                    type="text"
                    name="oteltitle2"
                    placeholder="Otel City"
                  />
                  <div className="errormessage"><ErrorMessage name="oteltitle2"/></div>
                </div>
                <div className="fulllocation">
                  <Field
                    type="text"
                    name="oteltitle3"
                    placeholder="Otel Street"
                  />
                  <div className="errormessage"><ErrorMessage name="oteltitle3"/></div>
                </div>
              </div>
            </div>
            <div className="oteladd_abouts">
              <h5>Otel Abouts</h5>
              <div className="oteladd_abouts_div"><div>
                <label>Otel Location</label>
                <Field type="text" name="otelkonum" />
                <div className="errormessage"><ErrorMessage name="otelkonum" /></div>
              </div>
              <div>
                <label>Otel img</label>
                <Field type="text" name="otelimg" />
                <div className="errormessage"><ErrorMessage name="otelimg" /></div>
              </div>
              <div>
                <label>Otel Name</label>
                <Field type="text" name="otelname" />
                <div className="errormessage"><ErrorMessage name="otelname" /></div>
              </div>
              <div>
                <label>Otel Included</label>
                <Field type="text" name="oteldahil" />
                <div className="errormessage"><ErrorMessage name="oteldahil" /></div>
              </div>
              <div>
                <label>Otel Star</label>
                <Field type="text" name="otelstar" />
                <div className="errormessage"><ErrorMessage name="otelstar" /></div>
              </div>
              <div>
               <label>Otel Price</label>
                <Field type="text" name="otelqiymet" />
                <div className="errormessage"><ErrorMessage name="otelqiymet" /></div>
              </div></div>
            </div>
            <div className="oteladd_isdek">
              <div className="oteladd_ekstra">
                <h5>Otel Ekstra</h5>
                <FieldArray
                  name="otelekstra"
                  render={(arrayHelpers) => (
                    <div>
                      {values.otelekstra && values.otelekstra.length > 0 ? (
                        values.otelekstra.map((otelekstra, index) => (
                          <div key={index} className="oteladd_map_div">
                            <Field name={`otelekstra.${index}`} />
                             
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")}
                            >
                              +
                            </button>
                            <div className="errormessage"><ErrorMessage name={`otelekstra.${index}`}/></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Ekstra
                        </button>
                        
                      )}
                     
                    </div>
                  )}
                />
              </div>
              <div className="oteladd_ekstra">
                <h5>Otel Feature</h5>
                <FieldArray
                  name="otelozellik"
                  render={(arrayHelpers) => (
                    <div>
                      {values.otelozellik && values.otelozellik.length > 0 ? (
                        values.otelozellik.map((otelozellik, index) => (
                          <div key={index} className="oteladd_map_div">
                            <Field name={`otelozellik.${index}`} />
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)} 
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")} 
                            >
                              +
                            </button>
                            <div className="errormessage"><ErrorMessage name={`otelozellik.${index}`}/></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Feature
                        </button>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="oteladd_ekstra">
                <h5>Otel Activity</h5>
                <FieldArray
                  name="otelaktivite"
                  render={(arrayHelpers) => (
                    <div>
                      {values.otelaktivite && values.otelaktivite.length > 0 ? (
                        values.otelaktivite.map((otelaktivite, index) => (
                          <div key={index} className="oteladd+mad_div">
                            <Field name={`otelaktivite.${index}`} />
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")}
                            >
                              +
                            </button>
                          <div className="errormessage"><ErrorMessage name={`otelaktivite.${index}`}/></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Activity
                        </button>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="oteladd_ekstra">
                <h5>Otel Beach</h5>
                <FieldArray
                  name="otelhavuzplaj"
                  render={(arrayHelpers) => (
                    <div>
                      {values.otelhavuzplaj &&
                      values.otelhavuzplaj.length > 0 ? (
                        values.otelhavuzplaj.map((otelhavuzplaj, index) => (
                          <div key={index}>
                            <Field name={`otelhavuzplaj.${index}`} />
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")}
                            >
                              +
                            </button>
                            <div className="errormessage"><ErrorMessage name={`otelhavuzplaj.${index}`}/></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Beach
                        </button>
                      )}
                     
                    </div>
                    
                  )}
                />
              </div>
              <div className="oteladd_ekstra">
                <h5>Otel Honeymoon</h5>
                <FieldArray
                  name="otelbalayi"
                  render={(arrayHelpers) => (
                    <div>
                      {values.otelbalayi && values.otelbalayi.length > 0 ? (
                        values.otelbalayi.map((otelbalayi, index) => (
                          <div key={index}>
                            <Field name={`otelbalayi.${index}`} />
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)} 
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")} 
                            >
                              +
                            </button>
                            <div className="errormessage"><ErrorMessage name={`otelbalayi.${index}`}/></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Honeymoon
                        </button>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="oteladd_ekstra">
                <h5>Otel Note</h5>
                <FieldArray
                  name="otelnotlar"
                  render={(arrayHelpers) => (
                    <div>
                      {values.otelnotlar && values.otelnotlar.length > 0 ? (
                        values.otelnotlar.map((otelnotlar, index) => (
                          <div key={index}>
                            <Field name={`otelnotlar.${index}`} />
                            <button
                              type="button" 
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")}
                            >
                              +
                            </button>
                            <div className="errormessage"><ErrorMessage name={`otelnotlar.${index}`}/></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Note
                        </button>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="oteladd_ekstra">
                <h5>Otel Concept</h5>
                <FieldArray
                  name="otelkonsept"
                  render={(arrayHelpers) => (
                    <div>
                      {values.otelkonsept && values.otelkonsept.length > 0 ? (
                        values.otelkonsept.map((otelkonsept, index) => (
                          <div key={index}>
                            <Field name={`otelkonsept.${index}`} />
                           
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)} 
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")} 
                            >
                              +
                            </button>
                             <div className="errormessage"><ErrorMessage name={`otelkonsept.${index}`}/></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add Consept
                        </button>
                      )}
                      
                    </div>
                  )}
                />
                
              </div>
            </div>
            <div className="oteladd_rooms">
              <h5>Room</h5>
              <FieldArray
                  name="otelpaket"
                  render={(arrayHelpers) => (
                    <div >
                      {values.otelpaket && values.otelpaket.length > 0 ? (
                        values.otelpaket.map((otelpaket, index) => (
                          <div key={index} className="oteladd_room">
                             <div><Field
                          name={`otelpaket.[${index}].odaimg`}
                          placeholder="Room img"
                        />
                        <div className="errormessage"><ErrorMessage name={`otelpaket.${index}.odaimg`}/></div></div>
                        <div><Field
                          name={`otelpaket.${index}.odaqiymet`}
                          placeholder="Room price "
                        />
                        <div className="errormessage"><ErrorMessage name={`otelpaket.${index}.odaqiymet`}/></div>
                        </div>
                            <div><button
                              type="button"
                              className="btn btn-danger btn-rounded"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-rounded"
                              onClick={() => arrayHelpers.insert(index, "")}
                            >
                              +
                            </button></div>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button" className="btn btn-warning btn-rounded"
                          onClick={() => arrayHelpers.push({ odaqiymet: "", odaimg: "" })}
                        >
                          Add Room
                        </button>
                      )}

                    </div>
                  )}
                />
            </div>
            <button type="submit" className="btn btn-success btn-rounded" style={{marginTop:"30px"}}>Add Otel</button>
          </Form>
        )}
      />
    </div>
  );
}

export default Oteladd;
