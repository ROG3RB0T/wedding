import React from 'react';
import {useParams} from 'react-router-dom';
import { Data } from '../../resoruces/list';
import './style.css'

const Rsvp = () => {
    const { id } = useParams();
    const GuestRsvp = {id};
    const filterObject = Data.filter(item => item.id === GuestRsvp.id);
    return (
            <div id="rsvp" className="rsvp-area">
                <div className="container">
                    <div className="row">
                            <div className="rsvp-wrap">
                                    <div className="section-title section-title4 text-center">
                                        {filterObject.map((obj,index) =>
                                        (
                                            <>
                                            <h3>{obj.nombreInvitacion}</h3>
                                            <p>Hemos reservado espacio para {obj.reserva} adulto(s).</p>
                                            <p>Favor de confirmar su asistencia antes del 10 de Febrero, 2024 en el siguiente Link</p>
                                            <p><a className='btn btn-success' target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSchzVZKPEP-q76JGd2C9KaopiFCTER_lqw_3FvyLGHgnHK8xg/viewform'>Confirma Aqui</a></p>
                                            </>
                                        ))}                                   
                                </div>
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    
}

export default Rsvp;