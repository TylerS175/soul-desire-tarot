import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  return (
    <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
            <span role="img" aria-label="Tarot">🧙‍♂️</span>Soul Desire Tarot LLC</a>
        </h2>
    <nav className='navbar-item'>
        <ul className="flex-row">
            <li className="mx-2">
                <a data-testid="Home" href="#Home" onClick={() => {}}>Home</a>
            </li>
            <li className="mx-2">
                <a data-testid="Private" href="#Private" onClick={() => {}}>Private Readings</a>
                </li>

        </ul>
    </nav>

    </header>
  );
}

export default Nav;