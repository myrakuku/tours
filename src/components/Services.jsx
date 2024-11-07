import React from 'react';
import Title from './Title';
import { services } from '../data';

function Services() {
  return (

<section className="section" id="services">
<Title main_title='our' sub_title='services'/>
    <div className="section-center services-center">
    {services.map((services) => {
        return(<article key={services.id}>
            <span className="service-icon"><i className={services.icon}></i></span>
            <div className="service-info">
                <h4 className="service-title">{services.title}</h4>
                <p className="service-text">{services.text}</p>
            </div>
        </article>)
    })}
        
    </div>
    
</section>
  )
}

export default Services