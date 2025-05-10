import img from 'c:/Users/ayada/Downloads/Website Image3 1.png';
import photo from 'file:///C:/Users/ayada/Downloads/Layer_1%20(12).svg';
import './WhyTamkeen.css';

export default function WhyTamkeen(){
    return(
        <div>
            <h1 id='title1'>
                Why TAMKEEN?
            </h1>
            <p className='reason'>In a complex and evolving Syrian market,<br/> choosing the right partner is crucial. <br/><br/>
                <span>TAMKEEN</span> stands out as your dedicated ally,<br/> offering unparalleled expertise, personalized <br/> support, and a commitment to your success. <br/><br/>
                We go beyond traditional business services,<br/> becoming an integral part of your journey to <br/> establish and grow your ventures in Syria.</p>
                <img src={img} alt='noria' id='naria' />
                <img src={photo} alt='letter-j' id='letter-j' />
        </div>
    );
}