import React from 'react';
import './card.css';

const Card=(props)=> {
    return (
        <>
          <div className="card">
            <div className={" "+props.cardimg}>
          </div>
          <div className={"card-heading ".concat(props.headingcolor)}>
           <p>{props.cardheading}</p>
          </div>
          <div className="card-text">
          <p>{props.cardpara}</p>
          </div>
          <div className={"read-more ".concat(props.headingcolor)}>
          <p>View More</p>
          </div>
          </div>
            
        </>
    );
}

export default Card;