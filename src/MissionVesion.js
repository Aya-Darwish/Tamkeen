import React from 'react';
import photo from 'file:///C:/Users/ayada/Downloads/Layer_1%20(15).svg';
import './MissionVision.css';

export default function MissionVision() {
  const items = [
    { title: 'Mission', description: `At <span>TAMKEEN</span>, our mission is to be the premier facilitator of investment and business growth in Syria. We strive to provide comprehensive, reliable, and tailored solutions that empower our clients to navigate the Syrian market with confidence and achieve their business objectives.` },
    { title: 'Vision', description: "Our vision is to create a thriving business environment in Syria, where investors and entrepreneurs can flourish. We aim to be the catalyst for positive change, driving innovation and facilitating seamless entry into the Syrian market." },
  ];

  return (
    <div>
        <img src={photo} alt='letter' id='letter' />
      <ul> 
        <li>
          <div className='mission'>
            <h1 className='title1'>{items[0].title}</h1>
            <p className='description1'dangerouslySetInnerHTML={{ __html: items[0].description }} />
          </div>
        </li>
        <div className='line'></div>
        <li>
          <div className='vision'>
            <h1 className='title2'>{items[1].title}</h1>
            <p className='description2'>{items[1].description}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}