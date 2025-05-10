import Header from './Header';
import Menu from './Menu';
import Empower from './Empower';
import Gateway from './Gateway';
import MissionVision from './MissionVesion';
import Values from './Values';
import Services from './Services';
import WhySyria from './WhySyria';
import Testimonials from './Testimonials';
import WhyTamkeen from './WhyTamkeen';
import Faq from './FAQ';

import './App.css';

export default function App(){
  return(
    <div>
      <Header />
      <Menu />
      <Empower />
      <Gateway />
      <MissionVision />
      <Values />
      <Services />
      <WhySyria />
      <Testimonials />
      <WhyTamkeen />
      <Faq />
    </div>
  );
}