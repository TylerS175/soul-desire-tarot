import React from 'react';

function About() {
    return (
        <section>
        <div className="my-2 About">
            <img className="photo" src={process.env.PUBLIC_URL + '/images/Lacy-1.jpg'} alt="Logo"/>
            <h1 className="About" id="Description">Welcome to my page!</h1>
            <p>
                Welcome to my page. My name is Lacy and I have been intutive reader for 10+ years. I can provide gudiances on my aspects such as Love, Relationships, Career, Finances, or Soul Purpose. Please feel free to check out my main and be sure to subscribe to my Instagram and TikTok page. Typically go live daily on TikTok on central. Love and light your life. 
            </p>
        </div>
        <div>
            <h1>Testing</h1>
        </div>
        <div className="about2">
            <img className="photo" src={process.env.PUBLIC_URL + '/images/7ofswords1.jpeg'} alt="Logo"/>
            <p>Please stay aware of fake accounts! Unfortunately, in the Tarot Community the scammers will try to approach you on social media and impersonate myself. I will never follow you or message you first directly. If you received a follow request or message please blocked and report immediately. All of my accounts are attached at the footer of the page and my LinkTree profile.</p>
        </div>
        
        </section>
        
    );
}

export default About;