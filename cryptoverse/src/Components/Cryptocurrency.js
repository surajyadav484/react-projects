import React from "react";
import { Row,Col,Typography, Card } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import millify from "millify";

const Cryptocurrency = () => {

    const{data:cryptoList, isFetching} = useGetCryptosQuery();

    const cryptos = cryptoList?.data?.coins;
    // console.log(cryptos);
    if(isFetching) return 'Loading..'

    return(
        <>
        <Row gutter={[32,32]} className="crypto-card-container">
            {
                cryptos.map((crypto)=>(
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
                        <Link to={`/cypto/${crypto.id}`}>
                            <Card
                             title={`${crypto.rank}. ${crypto.name}`}
                             extra={<img className="crypto-image" src= {crypto.iconUrl} />}
                             hoverable
                            >
                                Price: {millify(Number(`${crypto.price}`))} <br/>
                                Market Cap: {millify(Number(`${crypto.marketCap}`))}<br/>
                                Daily Change: {crypto.change}%

                            </Card>
                        </Link>
                    </Col>
                ))
            }
        </Row>
        </>
    );
}
export default Cryptocurrency;