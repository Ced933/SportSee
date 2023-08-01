import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartUser = ({ dataUserActivity }) => {
    // taille min du recharts barr 650px 
    const [widthBarr, setWidthBarr] = useState(650);
    // taille de l'ecran
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const funcScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    console.log(screenWidth)
    useEffect(() => {
        // si la taile de l'ecran est superieur à
        if (screenWidth > 1124) {
            // window.addEventListener("resize", setX(700));
            // return () => window.removeEventListener("resize", setX);
            setWidthBarr(700)

        }
        if (screenWidth > 1224) {
            // window.addEventListener("resize", );
            // return () => window.removeEventListener("resize", setX(700));
            setWidthBarr(750)
        }
        if (screenWidth > 1324) {
            setWidthBarr(800)
        }
        if (screenWidth > 1424) {
            setWidthBarr(850)
        }

        window.addEventListener("resize", funcScreenWidth);
        return () => window.removeEventListener("resize", funcScreenWidth);


    }, [funcScreenWidth, setWidthBarr])


    console.log(screenWidth);
    return (
        <div className='div-barchart'>
            <p>Activité quotidienne</p>

            <BarChart
                width={widthBarr}
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