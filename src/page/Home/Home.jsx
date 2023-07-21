import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Home.scss';
import data from "../../data";

import BarChartUser from '../../components/BarChartUser';
import LineChartUser from '../../components/LineChartUser';
import RadarChartUser from '../../components/RadarChartUser';
import PieChartUser from '../../components/PieChartUser';
import Indice from '../../components/Indice/Indice';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NameUser from '../../components/NameUser/NameUser';

// import { fetchData } from '../../Services/Services';


const Home = () => {


    const { id } = useParams();

    // const [userDataInfo, setUserDataInfo] = useState([]);
    // const [userActivity, setUserActivity] = useState([]);
    // const [userAverageSession, setUserAverageSession] = useState([]);
    // const [userPerformance, setUserPerformance] = useState([]);
    console.log(id)
    useEffect(() => {
        // const fetchData = async () => {

        //     const result = await fetch(`http://localhost:3000/user/${id}`);
        //     const jsonResult = await result.json();
        //     setUserDataInfo(jsonResult.data);


        // }
        // fetchData();
        // .then((res) => setUserDataInfo(res.data))

        // const fetchDataAverage = async () => {
        //     console.log(2)
        //     const result = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
        //     const jsonResult = await result.json();
        //     setUserAverageSession(jsonResult.data);


        // }
        // fetchDataAverage();

        // const fetchDataPerformence = async () => {
        //     console.log(3)
        //     const result = await fetch(`http://localhost:3000/user/${id}/performance`);
        //     const jsonResult = await result.json();
        //     setUserPerformance(jsonResult.data);


        // }
        // fetchDataPerformence();

        //     const fetchDataAcitivty = async () => {
        //         console.log(4)
        //         const result = await fetch(`${process.env.REACT_APP_ACTIVITY}`);
        //         const jsonResult = await result.json();
        //         setUserActivity(jsonResult.data);

        //     }
        //     fetchDataAcitivty();

    }, [])


    const userDataInfo = data.USER_MAIN_DATA.find(user => id == user.id);
    const userActivity = data.USER_ACTIVITY.find(user => id == user.userId);
    const userAverageSession = data.USER_AVERAGE_SESSIONS.find(user => id == user.userId);
    const userPerformance = data.USER_PERFORMANCE.find(user => id == user.userId);

    // console.log(userDataInfo);
    // console.log(userActivity);
    // console.log(userAverageSession);
    // console.log(userPerformance);

    return (
        <div>

            <div className='home'>
                {/* data Back-End */}
                {/* <NameUser dataName={userDataInfo} /> */}
                {/* data json  */}
                <NameUser dataName={userDataInfo} />
                <div className='all-graphics'>

                    <div className='first-part'>
                        <div className='barchart-container-full'>
                            {/* data Back-End */}
                            {/* <BarChartUser dataUserActivity={userActivity.sessions} /> */}
                            {/* data json  */}
                            <BarChartUser dataUserActivity={userActivity.sessions} />
                        </div>
                        <div className='chart-split'>
                            {/* data Back-End */}
                            {/* <LineChartUser dataAverageSession={userAverageSession.sessions} /> */}
                            {/* data json  */}
                            <LineChartUser dataAverageSession={userAverageSession.sessions} />

                            {/* data Back-End */}
                            {/* <RadarChartUser dataPerformance={userPerformance.data} /> */}
                            {/* data json  */}
                            <RadarChartUser dataPerformance={userPerformance.data} />

                            {/* data Back-End */}
                            {/* <PieChartUser dataScore={userDataInfo.todayScore} /> */}
                            {/* data json  */}
                            <PieChartUser dataScore={userDataInfo.todayScore} />
                            {/* pie ne marche pas  */}

                        </div>
                    </div>
                    <div className='seconde-part'>
                        <Indice dataScore={userDataInfo.keyData} />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Home;