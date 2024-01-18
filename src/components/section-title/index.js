import React from 'react';
import './style.css';
import swirlLeft from '../../images/section-title-swirl-left.png';
import swirlRight from '../../images/section-title-swirl-right.png';

const Sectiontitle = (props) => {
    return(
        <div className="section-title">
                <div className="row">
                    <div className='col-4 swirl-left'>
                    </div>
                    <div className="col-4">
                        <h2>{props.section}</h2>
                    </div>
                    <div class="col-4 swirl-right">
                    </div>
                </div>
        </div>
    )
}

export default Sectiontitle;