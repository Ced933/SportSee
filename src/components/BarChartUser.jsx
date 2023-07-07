import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartUser = ({ dataUserActivity }) => {

    // barchart simplebarchart 
    return (
        <div>

            <BarChart
                width={500}
                height={300}
                data={dataUserActivity}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kilogram" fill="#8884d8" />
                <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default BarChartUser;