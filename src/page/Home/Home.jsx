import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Home.scss';
import data from "../../data";

import BarChartUser from '../../components/BarChartUser';
import LineChartUser from '../../components/LineChartUser';
import RadarChartUser from '../../components/RadarChartUser';
import PieChartUser from '../../components/PieChartUser';
import Indice from '../../components/Indice/Indice';
const Home = () => {
    const userIdPersona = 12;


    useEffect(() => {

        // if (userIdPersona === data.USER_MAIN_DATA[0].id) {
        //     console.log(data.USER_MAIN_DATA[0].userInfos)
        //     console.log(data.USER_MAIN_DATA[0].todayScore)
        //     console.log(data.USER_MAIN_DATA[0].keyData)
        // }

        // console.log(data.USER_ACTIVITY[0].sessions)


        // if (userIdPersona === data.USER_AVERAGE_SESSIONS[0].userId) {
        //     console.log(data.USER_AVERAGE_SESSIONS[0].sessions)
        // }

        // if (userIdPersona === data.USER_PERFORMANCE[0].userId) {

        //     console.log(data.USER_PERFORMANCE[0].data)
        // }

    }, [])

    const datan = [


        { name: "Group F", value: 189 }
    ];


    return (
        <div>
            <Navigation />
            <div className='home'>
                <div className='first-part'>
                    <div className='barchart-container-full'>

                        {
                            userIdPersona === data.USER_MAIN_DATA[0].id && <h2>Bonjour {data.USER_MAIN_DATA[0].userInfos.firstName} {data.USER_MAIN_DATA[0].userInfos.lastName}</h2>
                        }
                        <BarChartUser dataUserActivity={data.USER_ACTIVITY[0].sessions} />
                    </div>
                    <div className='chart-split'>
                        <LineChartUser dataAverageSession={data.USER_AVERAGE_SESSIONS[0].sessions} />
                        <RadarChartUser dataPerformance={data.USER_PERFORMANCE[0].data} />
                        <PieChartUser datan={datan} dataScore={data.USER_MAIN_DATA[0].todayScore} />

                    </div>
                </div>
                <div className='seconde-part'>
                    <Indice dataScore={data.USER_MAIN_DATA[0].keyData} />
                </div>

            </div>
        </div>
    );
};

export default Home;