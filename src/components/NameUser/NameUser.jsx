import React from 'react';
import './NameUser.scss';
const NameUser = ({ dataName }) => {
    console.log(dataName);
    return (
        dataName && dataName.userInfos ?
            <div className='Header-presention'>
                {
                    <h2>Bonjour <span className='name-red'> {dataName.userInfos.firstName} {dataName.userInfos.lastName}</span></h2>
                }
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div> : <div>erreur lors du chargement des données</div>
    );
};

export default NameUser;