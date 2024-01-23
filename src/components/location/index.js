import React from 'react'
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import strory1 from '../../images/Invitation/cielo_abierto.jpeg'
import strory2 from '../../images/events/2.jpg'
import strory3 from '../../images/events/3.jpg'

import './style.css'

const Location = () => {
    return(

        
    <div id="event" className="service-area section-padding">
        <div className="container">
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                           <span><a target='_blank' href='https://www.waze.com/en/live-map/directions/cielo-abierto-rn-6-carretera-a-panchimalco-km-15-12?latlng=13.616458588005665%2C-89.18321371078493'>
                           <i class="fa fa-map-pin" aria-hidden="true"></i>
                           &nbsp;Click aqui para ir al mapa
                            </a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}
export default Location;