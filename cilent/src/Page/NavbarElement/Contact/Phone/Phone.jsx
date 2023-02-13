import React from 'react'
import './Phone.css'
import { Field ,Form ,Formik } from 'formik';
import CountryList, { getList } from 'country-list-with-dial-code-and-flag'
function Phone() {
    const Phonecodeflag=getList()
  return (
    <div className='contact_phone'>
        <Formik
        initialValues={{
          turtalep: "",
          phonenumber: "",
          operatorcode:"",
        }}
        onSubmit={(values) => {
          let contact=[{
            turtalep:values.turtalep,
            fullnumber:values.operatorcode + values.phonenumber

        }]
        console.log(contact);
          
          
        }}
        >
            <Form className='contact_phone_form'>       
                    <h2>0 333 333 3 333</h2>
                <div className='contact_phone_form_talep'>
                    <label>Talep Konusu</label>
                    <Field id='talep' component="select" name='turtalep' >
                     <option value="Yurtiçi Otel veya Paket Tur Rezervasyon Talebi">Yurtiçi Otel veya Paket Tur Rezervasyon Talebi</option> 
                     <option value="Yurtdışı Otel veya Paket Tur Rezervasyon Talebi">Yurtdışı Otel veya Paket Tur Rezervasyon Talebi</option>
                    <option value="Uçak Bileti Rezervasyon Talebi">Uçak Bileti Rezervasyon Talebi</option> 
                    <option value="Değişiklik Talebi">Değişiklik Talebi</option> 
                    <option value="İptal Talebi">İptal Talebi</option> 
                    <option value="Ek Hizmet Ekleme/Çıkarma">Ek Hizmet Ekleme/Çıkarma</option> 
                    <option value="Tur Bilgilendirmesi">Tur Bilgilendirmesi</option> 
                    <option value="Eksik Evrak Talebi">Eksik Evrak Talebi</option> 
                    <option value="Eksik Ödeme Tamamlama Talebi">Eksik Ödeme Tamamlama Talebi</option>
                    </Field>
                </div>
                <div>
                    <label>Telefon Numarası</label>
                    <div className='telefonnumarasi'>
                        <Field id='countrycode' component="select" name='operatorcode' >
                            <option value="+90">TR +90</option>
                        {
                            Phonecodeflag.map((x,index)=>(
                                <option value={x.dial_code} key={index}>{x.code}  {x.dial_code}</option>
                            ))
                        }
                        
                        </Field>
                        <Field id="numbercode" name='phonenumber' type='text'/>

                        
                    </div>
                </div>
                <div>
                    <button type='submit'>Gönder</button>
                </div>

            </Form>
            
        </Formik>
    </div>
  )
}

export default Phone