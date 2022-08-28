import React from 'react';


function Reading(){

    return(
        <div classname="container">
            <h1 className="text-center">Book a Private Reading</h1>
            <br></br>
            <h2 className="text-center">Please see the options below. Once you chosen the reading for please select the purchase button and from it will redirect you to linktree to complete your purchase. Three payment options: Cashapp, Venmo, or Paypal.</h2>
            <button className="">Purchase</button>
            <br></br>
                <h1>Love Reading - $50</h1>
            <div className="row">
                <img className="photo" src={process.env.PUBLIC_URL + '/images/2ofcups .jpeg'} alt="2" />
                <p>Currently in a relationship or do you have someone in mind?</p>
            </div>
                <h1>Career Reading/Life Purpose - $50</h1>
            <div className="row">
                <img className="photo" src={process.env.PUBLIC_URL + '/The Emperor Tarot .jpeg'} alt="3" />
                <p></p>
            </div>
           
        </div>
    );
}

export default Reading;