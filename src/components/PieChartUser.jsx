import React from 'react';


import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const PieChartUser = ({ datan, dataScore }) => {
    console.log(dataScore);

    return (
        <div className='div-piechart'>

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
                    innerRadius={70}
                    outerRadius={90}
                    fill="#FE293B"
                    label
                />
            </PieChart>
        </div>
    );
};

export default PieChartUser;