import React from 'react';
import './Menu.css';

export default function Menu() {
const menuItems = [
{ text: 'Home', href: '/home' },
{ text: 'About Us', href: '/about' },
{ text: 'Team', href: '/team' },
{ text: 'Services', href: '/services' },
{ text: 'Opportunities', href: '/opportunities' },
{ text: 'Regulatory', href: '/regulatory' },
{ text: 'Resources', href: '/resources' },
{ text: 'Testimonial', href: '/testimonial' },
{ text: 'Contact Us', href: '/contact' },
];
 return (
 <nav className='container'>
    <ul>
    {menuItems.map((item) => {
    let linkClass = 'menu-link'; 
    let listItemClass = 'menu-item';

switch (item.text) {
 case 'Home':
 linkClass += ' home-style';
 break;
 case 'About Us':
 linkClass += ' about-us-style';
 break;
 case 'Team':
 linkClass += ' team-style';
break;
 case 'Services':
 linkClass += ' services-style';
 break;
 case 'Opportunities':
 linkClass += ' opportunities-style';
break;
 case 'Regulatory':
 linkClass += ' regulatory-style';
 break;
 case 'Resources':
 linkClass += ' resources-style';
 break;
 case 'Testimonial':
 linkClass += ' testimonial-style';
 break;
 case 'Contact Us':
 linkClass += ' contact-us-style';
break;
 default:
 break;
}
 return (
 <li key={item.text} className={listItemClass}>
 <a href={item.href} className={linkClass}>
{item.text}
 </a>
 </li>

 );
 })}
 </ul>
 </nav>
 );

}