import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = () => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-10">
                            <div className="logo">
                                <h2><Link to='/home'>Boda Menjivar Castro<span><i className='fa fa-heart'></i></span></Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                           
                        </div>
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
