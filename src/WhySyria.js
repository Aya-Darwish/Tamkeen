import photo from 'c:/Users/ayada/Downloads/Website Image2 1 (1).png';
import letter from 'file:///C:/Users/ayada/Downloads/Layer_1%20(11).svg';
import './WhySyria.css';

export default function Why(){
    return(
        <div>
            <h1 className="title-why">Why Syria</h1>
            <p className="text-why">
                While acknowledging the challenges, <span>TAMKEEN </span> <br/> recognizes the significant long-term potential of <br/> the Syrian market. As the nation embarks on a path <br/> of rebuilding and recovery, unique opportunities are <br/> emerging for investors seeking to contribute to <br/> Syria's future and capitalize on its strategic <br/> advantages. We are here to guide you through the <br/> complexities and help you unlock the rewards of <br/> investing in Syria.
            </p>
            <img src={photo} alt='palmayra' id='palmayra' />
            <img src={letter} alt='a-letter' id='a-letter' />
        </div>
    );
}