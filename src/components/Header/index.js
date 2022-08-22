import React, { useState } from 'react';
import Navigation from "../Navigation";
import Reading from "../Reading";
import About from "../About";

function Header()   {
    const [currentPage, handlePageChange] = useState("about");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Book A Private Reading":
                return <Reading />;
            default:
                return <About />;
        }
    };
  
    return (
      <div className="row">
        <nav className="navbar">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
              href=""
            >
              <img className="Logo" src={process.env.PUBLIC_URL + '/images/SoulDesirelogo.jpg'} alt="Logo"/>
              <span className="content is-large">Soul Desire Tarot LLC</span>
            </a>
          </div>
        </nav>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        /> 
         <main>
          <div>{renderPage(currentPage)}</div>
        </main>
      </div>
    );
  }

export default Header;