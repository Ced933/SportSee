import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const RadarChartUser = ({ dataPerformance }) => {


    return (
        <div className='div-radar'>
            <RadarChart cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500} data={dataPerformance}>
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 26 }} />
                {/* <PolarRadiusAxis /> */}
                <Radar name="Mike" dataKey="value" stroke="#fff" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};

export default RadarChartUser;