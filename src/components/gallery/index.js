import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Sectiontitle from '../section-title'
import './style.css'

import galimg1 from '../../images/gal/saidYes.jpeg'
import galimg2 from '../../images/gal/J&R-47.jpg'
import galimg3 from '../../images/gal/J&R-57.jpg'
import galimg4 from '../../images/gal/J&R-59.jpg'
import galimg5 from '../../images/gal/J&R-67.jpg'
import galimg6 from '../../images/gal/J&R-93.jpg'
import galimg7 from '../../images/gal/J&R-88.jpg'

class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="Gallery-section section-padding pb-70">

          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="gallery-img img-center">
                        <ReactFancyBox
                            thumbnail={galimg1}
                            image={galimg1}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg2}
                            image={galimg2}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg3}
                            image={galimg3}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg4}
                            image={galimg4}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg5}
                            image={galimg5}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg6}
                            image={galimg6}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={galimg7}
                            image={galimg7}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Gallery;