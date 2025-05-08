import React from "react";
import './Testimonials.css';

export default function Testimonials(){
    const testimonials = [
        {text: `Welcome to <span>TAMKEEN </span>, your trusted partner for seamless business <br/> establishment and investment growth in Syria. We specialize in <br/> providing comprehensive solutions, from legal company formation <br/> and logistical support to personalized investor services.`, name: 'Ammar Darwish | CEO TAMKEEN CO.'}
    ];
    return(
        <div className="people">
            <h1 id="title-testimonials">Testimonials</h1>
            <div className="person">
                {testimonials.map((testimonial) => {
                    let textItem = 'text-item';
                    let nameItem = 'name-Item';
                    switch (testimonial.name) {
                        case 'Ammar Darwish | CEO TAMKEEN CO.':
                            nameItem += ' boss';
                            textItem += ' boss-quote';
                            break;
                        default:
                            break;
                    }
                    return(
                        <div key={testimonial.name}>
                            <h1 className="double">
                                “
                            </h1>
                            <p className={textItem} dangerouslySetInnerHTML={{ __html: testimonial.text}}/>
                            <h1 className={nameItem}>
                                {testimonial.name}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}