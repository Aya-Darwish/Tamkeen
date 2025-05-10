import img from 'file:///C:/Users/ayada/Downloads/Group%20(1).svg';
import './Header.css';

export default function Header(){
    return(
        <div className='head'>
            <img src={img} alt='logo' id='logo' />
        </div>
    );
}