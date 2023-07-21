import React from 'react';
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

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
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="day" />
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFBDBD" strokeWidth={2} activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </div>
    );
};

export default LineChartUser;