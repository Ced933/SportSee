import React from 'react';
import { PieChart, Pie } from 'recharts';

const PieChartUser = ({ dataScore }) => {

    return (
        dataScore && dataScore[0].score ?
            <div className='div-piechart'>
                <p className='p-piechart'>Score</p>
                <div className='div-score-chart'>
                    <h4>{dataScore[0].score}%</h4>
                    <p>de votre <br /> objectif</p>
                </div>
                <PieChart width={400} height={400}>
                    <Pie
                        data={dataScore}
                        dataKey="score"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#fff"
                    />
                    <Pie
                        data={dataScore}
                        dataKey="score"
                        cx={200}
                        cy={200}

                        startAngle={dataScore[0].score}

                        endAngle={0}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#FE293B"
                        label
                    />

                </PieChart>
            </div> : <div>erreur</div>
    );
};

export default PieChartUser;