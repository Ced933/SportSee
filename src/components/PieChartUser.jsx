import React, { useEffect, useState } from 'react';


import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const PieChartUser = ({ dataScore }) => {
    // console.log(dataScore[0].score);
    // const [scoreData, setScoreDate] = useState(0);
    useEffect(() => {

        // setScoreDate(dataScore[0].score)
    }, [])
    // console.log(scoreData.todayScore[0].score);

    // const pieData = [
    //     { name: "completed", value: score, fillColor: `${styleVar.primary500}` },
    //     { name: "not-completed", value: 1 - score, fillColor: "transparent" },
    // ];
    // console.log(dataScore[0].score);
    return (
        dataScore && dataScore[0].score ?
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
                        // data json 
                        startAngle={dataScore[0].score}
                        // startAngle={1}
                        endAngle={0}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#FE293B"
                        label
                    />
                    {/* <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                >
                    {pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.fillColor}
                            cornerRadius="50%"
                        />
                    ))}
                </Pie> */}


                </PieChart>
            </div> : <div>erreur</div>
    );
};

export default PieChartUser;