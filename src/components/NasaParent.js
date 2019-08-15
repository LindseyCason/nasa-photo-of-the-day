import React from 'react';

const NasaParent = props =>{
return(
    <div className="NasaParent" key={props.id}>
        <h1> NASA PHOTO OF THE DAY</h1>
        <h2>Title: {props.title}</h2>
        <h3>Date: {props.date}</h3>
        <h3 className="description">{props.description}</h3>
        <img src={props.picture} alt="NASA Stars"/>
    </div>
);
};




export default NasaParent;