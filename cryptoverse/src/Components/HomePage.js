import React from "react";
import { Row, Col, Typography, Statistic } from "antd";
import millify from "millify";
import { Cryptocurrency, News } from "../Components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HomePage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    console.log(data?.data);

    const totalStats = data?.data?.stats;
    //console.log(totalStats);

    if (isFetching) return 'Loading...'

    return (
        <>
            <Title level={2} className="heading">Total Crypto Statistic</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrency" value={millify(totalStats.total)}></Statistic> </Col>
                <Col span={12}><Statistic title="Total Exchange" value={millify(totalStats.totalExchanges)}></Statistic> </Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(totalStats.totalMarketCap)}></Statistic> </Col>
                <Col span={12}><Statistic title="Total 24 Market Volume" value={millify(totalStats.total24hVolume)}></Statistic></Col>
                <Col span={12}><Statistic title="Total Market" value={millify(totalStats.totalMarkets)}></Statistic></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title"> Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"> <Link to='/cryptocurrencies'>Show more</Link></Title>
            </div>
            <Cryptocurrency simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title"> Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to='/news'>Show more</Link> </Title>
            </div>
            <News simplified />

        </>
    );
}
export default HomePage;