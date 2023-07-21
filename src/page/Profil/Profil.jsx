import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Profil.scss';
import { Link } from 'react-router-dom';
import dataUserInfo from '../../data';



const Profil = () => {


    console.log(dataUserInfo.USER_MAIN_DATA)
    const dataUser = dataUserInfo.USER_MAIN_DATA;
    return (
        <div >
            <div className='profil-box'>

                <div className='figure-box'>
                    {
                        dataUser.map(user => {
                            return <Link key={user.id} to={`home/${user.id}`}>
                                <figure className='figure-profil'>
                                    <h2>{user.userInfos.firstName}</h2>
                                </figure>
                            </Link>

                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Profil;