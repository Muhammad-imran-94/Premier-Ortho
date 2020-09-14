import React from 'react';
import './componentHeader.css';

const Componentheader=(props)=> {
    return (
        <>
           <section>
           <div className="container-fl"> 
           <div className="rowfull">
           <div className={"row-content-upper pb-8 ".concat(props.headingclr)}>
            <h4>{props.h4}</h4>
           </div> 
           </div> 
           <div className="rowfull">
           <div className="row-content-lower pb-40">
           <h1>{props.h1}</h1>
           <div className="hline">
           <hr className={props.hr } />
          </div> 
          <div className="hline2">
          <hr className={props.hr2 } />
         </div> 
          </div> 
          </div>
           </div> 
           </section> 
        </>
    );
}

export default Componentheader;