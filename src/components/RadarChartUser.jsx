import React from 'react';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RadarChartUser = ({ dataPerformance }) => {
    return (
        <div className='div-radar'>

            <RadarChart cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500} data={dataPerformance}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="value" stroke="#fff" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>
        </div>

    );
};

export default RadarChartUser;