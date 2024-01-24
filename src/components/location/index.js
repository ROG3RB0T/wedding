import React from 'react'

import strory1 from '../../images/Invitation/cielo_abierto.jpeg'


import './style.css'

const Location = () => {
    return(

        
    <div id="event" className="service-area">
        <div className="container">
           
                <div className="ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-12 col-12 text-center">
                            <div className="ceromony-content">
                                <span><a target='_blank' href='https://www.waze.com/en/live-map/directions/cielo-abierto-rn-6-carretera-a-panchimalco-km-15-12?latlng=13.616458588005665%2C-89.18321371078493'>
                                <i class="fa fa-map-marker fa-5x" aria-hidden="true"></i>
                                &nbsp;Click aqui para ir al mapa
                                    </a></span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-12 col-12">
                            <div className='ceremony-location-map'>
                                <iframe 
                                    src="https://embed.waze.com/iframe?zoom=16&lat=13.616459&lon=-89.183214&ct=livemap" 
                                    width="100%" 
                                    height="450" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                       
                    
                </div>
            
            
        </div>
    </div>
    )
}
export default Location;