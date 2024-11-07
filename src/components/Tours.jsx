import React from 'react';
import Title from "./Title";
import { tours } from "../data";
import { tour1, tour2, tour3, tour4 } from '../data';

function Tours() {
  return (
    <section className="section" id="tours">
    <Title main_title='featured' sub_title='tours'/>
    <div className="section-center featured-center">
        {/* <!-- first tour --> */}
        {tours.map((tours) => {return(<article key={tours.id}>
            <div className="tour-img-container">
                <img src={tours.img} alt="" className="tour-img" />
                <p className="tour-date">{tours.date}</p>
            </div>
            <div className="tour-info">
                <h4>{tours.title}</h4>
                <p>{tours.info}</p>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map-location-dot"></i>{tours.location}</li>
                        <li>{tours.duration}</li>
                        <li>{tours.cost}</li>
                    </ul>
                </div>
            </div>
        </article>)})}

    </div>
</section>
  )
}

export default Tours