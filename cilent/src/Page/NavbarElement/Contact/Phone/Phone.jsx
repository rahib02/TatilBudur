import React, { useState } from 'react'
import './Phone.css'
import { Field, Form, Formik, ErrorMessage } from 'formik';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
function Phone() {
    const [value, setValue] = useState()
    return (
        <div className='contact_phone'>
            <Formik
                initialValues={{
                    turtalep: "",
                    fullnumber: ""
                }}

                onSubmit={values => {
                    if (values.turtalep) {
                        if (value) {
                            values.fullnumber = value
                            console.log(values);
                        }
                        else { alert("Zerhmet olmasa nomre yazin") }
                    }
                    else {
                        values.turtalep = "Yurtiçi Otel veya Paket Tur Rezervasyon Talebi"
                        if (value) {
                            values.fullnumber = value
                        }
                        else { alert("Zerhmet olmasa nomre yazin") }
                    }


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


                            <PhoneInput name='fullnumber'
                                className='phone_number'
                                international={true}
                                defaultCountry="TR"
                                value={value}
                                onChange={setValue} />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='Phone_submit_btn'>Gönder</button>
                    </div>

                </Form>

            </Formik>
        </div>
    )
}

export default Phone