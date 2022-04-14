import React from "react";
import { Typography, Col, Row } from "antd";

import 'chart.js/auto';
import { Line } from "react-chartjs-2";
// import { Chart } from 'react-chartjs-2';



const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = []
    const coinTimeStamp = []

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString());
    }

    //    console.log(coinPrice);
    //console.log(coinHistory.data.history.timestamp);
        console.log(coinTimeStamp);


    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backGrounColor: "#0071bd",
                borderColor: '#0071bd'
            }
        ]
    }

    // const options = {
    //     scales: {
    //         yAxes: {
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // }

    return (
        <>
            <Row className="chart-header">
                <Title level={3} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">{coinHistory?.data?.change}</Title>
                    <Title level={5} className="price-price">{coinName} Price: ${currentPrice}</Title>

                </Col>
            </Row>
            <Line data={data}  />
            
        </>
    )
}

export default LineChart;