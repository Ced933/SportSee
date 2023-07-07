import React from 'react';
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

const LineChartUser = ({ dataAverageSession }) => {
    console.log(dataAverageSession);
    return (
        <div>
            <LineChart
                width={300}
                height={180}
                data={dataAverageSession}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="day" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </div>
    );
};

export default LineChartUser;