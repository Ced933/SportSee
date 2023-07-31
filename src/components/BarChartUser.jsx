import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartUser = ({ dataUserActivity }) => {
    return (
        <div className='div-barchart'>
            <p>Activité quotidienne</p>
            <BarChart
                width={650}
                height={200}
                data={dataUserActivity}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}

            >
                <CartesianGrid strokeDasharray="3 3" vertical={true} />
                <XAxis tickLine={false} />
                <YAxis orientation="right" tickLine={false} />
                <Tooltip />
                <Legend />
                <Bar radius={[20, 20, 0, 0]} maxBarSize={10} dataKey="kilogram" fill="#282D30" />
                <Bar radius={[20, 20, 0, 0]} maxBarSize={10} dataKey="calories" fill="#E60000" />
            </BarChart>
        </div>
    );
};

export default BarChartUser;