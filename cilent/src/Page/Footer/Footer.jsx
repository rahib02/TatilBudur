import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
function Footer() {

  return (
    <div className="footer">
      <footer class="text-center text-lg-start bg-white text-muted" >
        <section class="footer_section_color p-1">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class=" fw-bold mb-4">
                  <i class="fas fa-gem me-3 text-secondary"></i>Tatil Budur
                </h6>
                <p>
                  Afişe edilen tüm fiyatlar, ilgili üründe kontenjan olması
                  durumunda geçerli olup seçeceğiniz döneme göre fiyatlar
                  değişkenlik gösterebilir.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Öne Çıkan Yurtiçi Oteller
                </h6>
                <p>
                 <Link to={"oteller/Yurtiçi Oteller/Antalya Oteller"} class="text-reset">
                          Antalya Oteller
                        </Link>
                </p>
                <p>
                   <Link to={"oteller/Yurtiçi Oteller/Bodrum Otelleri"} class="text-reset">
                          Bodrum Otelleri
                        </Link>
                </p>
                <p>
                  <Link to={"oteller/Yurtiçi Oteller/Alanya Otelleri"} class="text-reset">
                          Alanya Otelleri
                        </Link>
                </p>
                <p>
                  <Link to={"oteller/Yurtiçi Oteller/Marmaris Otelleri"}  class="text-reset">
                          Marmaris Otelleri
                        </Link>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Yardım</h6>
                <p>
                  <Link to={'/login'} class="text-reset">Giriş Yapın</Link>
                </p>
                <p>
                  <Link to={'/phone'} class="text-reset">Sizi Arayalım</Link>
                </p>
                <p>
                  <Link to={'/otelmap'} class="text-reset">Satış Ofizimiz</Link>
                </p>
                
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3 text-secondary"></i> Saray Mah. Dr. Adnan Büyükdeniz Cad. 2 Blok Apt. 
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  tatilbudur@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3 text-secondary"></i> 0 850 333 3 333
                </p>
                <p>
                  <i class="fas fa-print me-3 text-secondary"></i>0 850 333 3 333
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="container p-4 pb-0" className="" 
        >
          <section class="footer_section_color p-3" >
            <span>Bizi Takip Edin :
</span>
            <Link
              class="btn text-white btn-floating m-1"
              to={"/"}
              role="button"
               style={{backgroundColor:"black"}}
            >
              <i class="fab fa-facebook-f"></i>
            </Link>

            <Link
              class="btn text-white btn-floating m-1"
              style={{backgroundColor:"#55acee"}}
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </Link>

            <Link
              class="btn text-white btn-floating m-1"
               style={{backgroundColor:"#dd4b39"}}
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </Link>

            <Link
              class="btn text-white btn-floating m-1"
               style={{backgroundColor:"#ac2bac"}}
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </Link>

            <Link
              class="btn text-white btn-floating m-1"
               style={{backgroundColor:"#0082ca"}}
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </Link>
          </section>
        </div>

        <div
          class="text-center p-3"
           style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}
        >
          Copyright © 1997-2023 TatilBudur.com. 
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
