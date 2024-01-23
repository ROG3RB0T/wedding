import React from  'react';

// components
import Couple from '../../components/couple';
import SimpleSlider from '../../components/hero';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import People from '../../components/people';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Gift from '../../components/gift';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'
import Invitation from '../../components/Invitation/invitation_component'
import Sectiontitle from '../../components/section-title';
import { Data } from '../../resoruces/list';

const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Invitation/>
           <Sectiontitle section={'Sé nuestro invitado'}/>
           <Rsvp />
           <Sectiontitle section={'Ubicación'} />
           <Location/>
           <Sectiontitle section={'Sesión de fotos'}/>
           <Gallery />
           {/* <Saveday/>
           <Couple/>
           <Welcome/>
           <Story/>
           <People/>
           <Location/>
           <Gallery/>
           <Rsvp/>
           <Gift/> */}
       </div>
    )
}

export default Homepage;