import './Empower.css';
import img from 'file:///C:/Users/ayada/Downloads/Layer_1%20(4).svg'

export default function Empower(){
    return(
        <div className='back'>
            <h1 id='text'>
                Empowering <br/> Your Investment<br/> in Syria
            </h1>
            <img src={img} alt='img' id='img' />
        </div>
    );
}