import React from 'react';
import './Indice.scss';
const Indice = ({ dataScore }) => {
    return (
        dataScore ?
            <div className='indice-box'>
                <div className='indice-describe-box'>
                    <div className='indice-square'>
                        <img src="../energy.svg" alt="flame-icon" />
                    </div>
                    <div className='describe-indice'>
                        <p className='number-indice'>{dataScore.calorieCount}kCal</p>
                        <p>Calories</p>
                    </div>
                </div>

                <div className='indice-describe-box'>
                    <div className='indice-square-blue'>
                        <img src="../chicken.svg" alt="chicken-icon" />
                    </div>
                    <div className='describe-indice'>
                        <p className='number-indice'>{dataScore.proteinCount}g</p>
                        <p>Proteines</p>
                    </div>
                </div>

                <div className='indice-describe-box'>
                    <div className='indice-square-yellow'>
                        <img src="../apple.svg" alt="apple-icon" />
                    </div>
                    <div className='describe-indice'>
                        <p className='number-indice'>{dataScore.carbohydrateCount}g</p>
                        <p>Glucides</p>
                    </div>
                </div>

                <div className='indice-describe-box'>
                    <div className='indice-square'>
                        <img src="../cheeseburger.svg" alt="cheeseburger-icon" />
                    </div>
                    <div className='describe-indice'>
                        <p className='number-indice'>{dataScore.lipidCount}g</p>
                        <p>Lipides</p>
                    </div>
                </div>
            </div>
            : <div>erreur</div>
    );
};

export default Indice;