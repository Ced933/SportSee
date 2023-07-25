import React from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend } from 'recharts';

const LineChartUser = ({ dataAverageSession }) => {
    return (
        <div className='div-linechart'>
            <LineChart
                width={200}
                height={150}
                data={dataAverageSession}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >

                <XAxis dataKey="day" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFBDBD" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default LineChartUser;