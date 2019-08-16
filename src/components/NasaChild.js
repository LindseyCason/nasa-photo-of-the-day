import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const NasaChild = props =>{
return(
    
  <Card>      
    <Image src={props.picture} wrapped ui={false} />
    <Card.Content>    
        <Card.Header>NASA PHOTO OF THE DAY</Card.Header>
        <Card.Meta>{props.title}</Card.Meta>
        <Card.Meta>{props.date}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
    </Card.Content>
  </Card>

 );
};



export default NasaChild;



//This child is just the bare bones of the item we are going to be putting in the App. This child gets put into the parent (import) and the parent gives it the "DNA" aka properties it needs to appear on the screen. *See Parent*


//this was my original data inside my return before using semantic. Keeping for reference.
 // <div className="NasaChild">
    //     <h1> NASA PHOTO OF THE DAY</h1>
    //     <h2>Title: {props.title}</h2>
    //     <h3>Date: {props.date}</h3>
    //     <h3 className="description">{props.description}</h3>
    //     <img src={props.picture} alt="NASA Stars"/>
    // </div>

    // <Card className="NasaChild">
    //   <Card.Content header={props.title} />
    //   <Card.Content description={props.description} />
    //   <Image src = {props.picture} />
    // </Card>