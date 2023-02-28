import React from 'react'
import './Populer.css'
import { GiStaryu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function Populer() {
  return (
    <div className='populer'>
        <div className="populer_width">
            <div className="populer_header">
              <div className="populer_icon"><GiStaryu/></div>
            <div className="populer_text">Popüler Oteller</div>
            </div>
            <div className="populer_link">
              <span><Link to={"oteller/Kış Oteller/Kayak Otelleri"}>
                          Kayak Otelleri
                        </Link></span>
              <span><Link to={"oteller/Yurtiçi Oteller/Antalya Oteller"}>
                          Antalya Oteller
                        </Link></span>
              <span><Link  to={"oteller/Termal Oteller"}>Termal Oteller</Link></span>
              <span><Link to={"oteller/Termal Oteller/Yalova Termal Oteller"}>
                          Yalova Termal Oteller
                        </Link></span>
              <span><Link to={"oteller/Kış Oteller/Uludağ Otelleri"}>
                          Uludağ Otelleri
                        </Link></span>
              <span><Link to={"oteller/Yurtiçi Oteller/Alanya Otelleri"}>
                          Alanya Otelleri
                        </Link></span>
              <span><Link to={"oteller/Yurtiçi Oteller/Bodrum Otelleri"}>
                          Bodrum Otelleri
                        </Link></span>

              <span><Link to={"oteller/Yurtiçi Oteller/Marmaris Otelleri"}>
                          Marmaris Otelleri
                        </Link></span>
<span><Link to={"oteller/Kış Oteller/Sarıkamış Otelleri"}>
                          Sarıkamış Otelleri
                        </Link></span>
                        <span><Link to={"oteller/Termal Oteller/Bursa Termal Oteller"}>
                          Bursa Termal Oteller
                        </Link></span>
            </div>
        </div>
    </div>
  )
}

export default Populer