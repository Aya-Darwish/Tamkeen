import React, { useState } from 'react';
import './Faq.css';

function ToggleComponent() {

    const questionAnswer = [
        {question: 'What are the key advantages of investing in Syria?', answer: 'Syria offers strategic location, a skilled workforce, abundant natural resources, and government incentives for foreign investment. Tamkeen can provide detailed market analysis'}
    ];
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(prev => !prev); // Toggle visibility
  };

  return (
    <div className='contain'>
        <h1 className='title-contain'>FAQs</h1>
        <div  className='question-and-answer-container'>
          <div onClick={handleClick} className='question-container'>
            <p className='question-sentence'>{questionAnswer[0].question}</p>
          </div>

        {isVisible && (
          <div className='answer-container'>
            <p className='answer-sentence'>{questionAnswer[0].answer}</p>
          </div>
        
        )}
      </div>
    </div>
  );
}

export default ToggleComponent;