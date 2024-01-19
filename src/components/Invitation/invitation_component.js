import React, { Component } from 'react';
import './invitation.css'
import Sectiontitle from '../section-title';

class invitation_component extends Component {
    render() {
        return (
            <div id='#invitation-content' className='invitation-content'>
                <div className='container'>
                    <div className='row'>
                        <div className="display-t">
                        <div className="display-tc">
                            <div className="col-12 col-offset-1">
                                <div className="col-12 text-center">
                                    <div className="event-wrap animate-box fadeInUp animated-fast">
                                        <div className='row'>
                                            <div className='event-intro'>
                                                <p>"Y desde entonces soy porque tú eres, y desde entonces eres, soy y somos, y por amor seré, serás, seremos"</p>
                                                <span>Pablo Neruda</span>
                                            </div>
                                            <div className='event-icon'></div>
                                            <div className='event-bride'>
                                                <p>Jacqueline</p>
                                            </div>
                                            <div className='event-man'>
                                                <p>Rogelio</p>
                                            </div>
                                        </div>
 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default invitation_component;


