import React from 'react';
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className='nav'>

            <div className='container-nav'>
                <div className='nav-box'>
                    <ul className='ul-nav'>
                        <li><img src="./logo-sportsee.svg" alt="" /></li>
                        <li className='li-nav'>Accueil</li>
                        <li className='li-nav'>Profil</li>
                        <li className='li-nav'>Réglage</li>
                        <li className='li-nav'>Communauté</li>
                    </ul>

                </div>

            </div>
            <div className='colonne-nav'>
                <ul className='ul-colonne'>
                    <li className='li-icon'><img src="./icon.svg" alt="" /></li>
                    <li className='li-icon'><img src="./icon2.svg" alt="" /></li>
                    <li className='li-icon'><img src="./icon3.svg" alt="" /></li>
                    <li className='li-icon'><img src="./icon4.svg" alt="" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;