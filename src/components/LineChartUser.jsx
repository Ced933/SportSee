import React from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend } from 'recharts';

const LineChartUser = ({ dataAverageSession }) => {

    const dayFormatters = (day) => {
        switch (day) {
            case 1:
                day = "L";
                break;
            case 2:
                day = "M";
                break;
            case 3:
                day = "M";
                break;
            case 4:
                day = "J";
                break;
            case 5:
                day = "V";
                break;
            case 6:
                day = "S";
                break;
            case 7:
                day = "D";
                break;
            default:
                return day;
        }

        return day;
    };

    return (
        <div className='div-linechart'>
            <p className='p-linechart'>Durée moyenne des <br /> sessions</p>
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
                {/* on va utiliser tickFormateur pour pouvoir changer l'appelation des tick */}
                <XAxis dataKey="day" tickFormatter={dayFormatters} tick={{ fill: '#FFFFFF', opacity: '0.5' }} axisLine={false} tickLine={false} />
                <Tooltip />
                {/* <Legend value='demo' /> */}
                <Line type="monotone" dataKey="sessionLength" stroke="#FFBDBD" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default LineChartUser;