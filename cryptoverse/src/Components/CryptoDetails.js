import React, { useState } from "react";
import { Row, Col, Typography, Select } from "antd";
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import millify from "millify";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { useParams, useSearchParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";



const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {

    const { uuid } = useParams();

    const { data, isFetching } = useGetCryptoDetailsQuery(uuid);
    const [timeperiod, setTimePeriod] = useState('7d');
    const cryptoDetails = data?.data?.coin;

    console.log(cryptoDetails);

    if (isFetching) return 'Loading..'

    const timePeriod = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];


    return (
        <>
            <Col className="coin-detail-container">
                <Title className="coin-name" level={2}>
                    {cryptoDetails.name} Price
                </Title>
                <p>
                    {cryptoDetails.name} live price in US dollars.
                    View value Statistics, market cap and supply.
                </p>
                <Select
                    //  defaultValue="7d"
                    value={timeperiod}
                    className="select-timeperiod"
                    placeholder="Selct time period"
                    onChange={(value) => setTimePeriod(value)}

                >
                    {
                        timePeriod.map((time, i) => <option key={i} value={time}>{time}</option>)
                    }

                </Select>
                {/* line chart */}
                <Col className="stats-container">
                    <Col className="coin-value-statistics">
                        <Col className="coin-value-statistics-header">
                            <Title level={3} className="coin-details-heading">
                                {cryptoDetails.name} value statistics
                            </Title>
                            <p>
                                An overview showning the stats of {cryptoDetails.name}
                            </p>
                        </Col>
                        {
                            stats.map(({ icon, title, value, i }) => (
                                <Col key={i} className="coin-stats">
                                    <Col className="coin-stats-name">
                                        <Text>{icon}</Text>
                                        <Text>{title}</Text>
                                    </Col>
                                    <Text className="stats">{value}</Text>
                                </Col>

                            ))
                        }
                    </Col>
                    <Col className="coin-value-statistics">
                        <Col className="coin-value-statistics-header">
                            <Title level={3} className="coin-details-heading">
                                Other statistics
                            </Title>
                            <p>
                                An overview showning the stats of all cryptocurrencies
                            </p>
                        </Col>
                        {
                            genericStats.map(({ icon, title, value, i }) => (
                                <Col key={i} className="coin-stats">
                                    <Col className="coin-stats-name">
                                        <Text>{icon}</Text>
                                        <Text>{title}</Text>
                                    </Col>
                                    <Text className="stats">{value}</Text>
                                </Col>

                            ))
                        }
                    </Col>
                </Col>

                <Col className="coin-desc-link">
                    <Row coin-desc>
                        <Title level={3} className="coin-details-heading">
                            All About {cryptoDetails.name}
                            {HTMLReactParser(cryptoDetails.description)}
                        </Title>
                    </Row>
                    <Col className="coin-links">
                        <Title level={3} className="coin-details-headng">{cryptoDetails.name} Links</Title>
                        {
                            cryptoDetails.links.map((link) => (
                                <Row className="coin-link"
                                    key={link.name}>

                                    <Title level={5} className="link-name">
                                        {link.type}
                                    </Title>
                                    <a href={link.url} target="_blank" rel="noreferrer">
                                        {link.name}
                                    </a>
                                </Row>

                            ))
                        }
                    </Col>
                </Col>



            </Col>
        </>
    );
}
export default CryptoDetails;