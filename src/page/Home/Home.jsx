import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Scss 
import './Home.scss';
// Data json 
import data from "../../data";
// Rechart 
import BarChartUser from '../../components/BarChartUser';
import LineChartUser from '../../components/LineChartUser';
import RadarChartUser from '../../components/RadarChartUser';
import PieChartUser from '../../components/PieChartUser';
// Components 
import Indice from '../../components/Indice/Indice';
import NameUser from '../../components/NameUser/NameUser';
// Services 
import { fetchData, fetchDataActivity, fetchDataAverage, fetchDataPerfomance } from '../../Services/Services';

const Home = () => {

    const { id } = useParams();
    const [userDataInfo, setUserDataInfo] = useState([]);
    const [userActivity, setUserActivity] = useState([]);
    const [userAverageSession, setUserAverageSession] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);

    useEffect(() => {
        if (process.env.REACT_APP_MOCK === 'true') {
            console.log(process.env.REACT_APP_MOCK)
            // Json
            setUserDataInfo(data.USER_MAIN_DATA.find(user => id == user.id))
            setUserActivity(data.USER_ACTIVITY.find(user => id == user.userId));
            setUserAverageSession(data.USER_AVERAGE_SESSIONS.find(user => id == user.userId));
            setUserPerformance(data.USER_PERFORMANCE.find(user => id == user.userId));
        }
        else {
            // Api 
            console.log(process.env.REACT_APP_MOCK)
            const loadDataUserInfo = async () => {
                setUserDataInfo(await fetchData(id));
            }
            loadDataUserInfo();

            const loadDataAverage = async () => {
                setUserAverageSession(await fetchDataAverage(id));
            }
            loadDataAverage();

            const loadDataPerformence = async () => {
                setUserPerformance(await fetchDataPerfomance(id));
            }
            loadDataPerformence();

            const loadDataAcitivty = async () => {
                setUserActivity(await fetchDataActivity(id));
            }
            loadDataAcitivty();
        }
    }, [id]);

    return (
        <div>

            <div className='home'>
                <NameUser dataName={userDataInfo} />
                <div className='all-graphics'>
                    <div className='first-part'>
                        <div className='barchart-container-full'>
                            <BarChartUser dataUserActivity={userActivity.sessions} />
                        </div>
                        <div className='chart-split'>
                            <LineChartUser dataAverageSession={userAverageSession.sessions} />
                            <RadarChartUser dataPerformance={userPerformance.data} />
                            <PieChartUser dataScore={userDataInfo.todayScore} />
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