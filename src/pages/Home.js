import React from 'react';

function Home() {
    return (
        <section className="container">
            <div className="home">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-5">
                            <img className="photo " src={process.env.PUBLIC_URL + '/images/Lacy-1.jpg'} alt="Lacy" />
                        </div>
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">Welcome to my page!</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <img className="photo " src={process.env.PUBLIC_URL + '/images/7ofswords1.jpeg'} alt="7" />
                            <h1>Please stay aware of fake accounts</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about2">
            <img className="photo" src={process.env.PUBLIC_URL + '/images/7ofswords1.jpeg'} alt="Logo"/>
            <p>Please stay aware of fake accounts! Unfortunately, in the Tarot Community the scammers will try to approach you on social media and impersonate myself. I will never follow you or message you first directly. If you received a follow request or message please blocked and report immediately. All of my accounts are attached at the footer of the page and my LinkTree profile.</p>
        </div> */}

        </section>

    );
}

export default Home;