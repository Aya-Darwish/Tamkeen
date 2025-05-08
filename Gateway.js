import './Gateway.css';
import img from 'file:///C:/Users/ayada/Downloads/Layer_1%20(13).svg';

export default function Gateway(){
    return(
        <div>
            <h1 className='title'>
                Your Gateway to Syrian <br/> Business Success
            </h1>
            <p className='welcome'>
                Welcome to <span>TAMKEEN</span>, your trusted partner for seamless business establishment and <br /> investment growth in Syria. We specialize in providing comprehensive solutions, from <br/> legal company formation and logistical support to personalized investor services.<br/><br/>
                Navigate the dynamic Syrian market with confidence, backed by our expert guidance <br/> and local knowledge. Discover the opportunities that await, and let <span>TAMKEEN</span><br/> empower your success.
            </p>
            <img src={img} alt='character' id='let' />
        </div>
    );
}