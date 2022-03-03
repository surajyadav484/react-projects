import React, { useState,useEffect } from "react";
import { Row,Col,Typography, Card, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import millify from "millify";

const Cryptocurrency = ({simplified}) => {

    const count = simplified?10:100
    const{data:cryptoList, isFetching} = useGetCryptosQuery(count);
    const[searchTerm,setsearcTerm] = useState('');
    const [cryptos,setCryptos] = useState([]);
  

    useEffect(()=>{
        const filteredData = cryptoList?.data?.coins?.filter((coin)=>{
            return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
         })
         //console.log(filteredData);
         setCryptos(filteredData);
         
     },[cryptoList, searchTerm]);

    if(isFetching) return 'Loading..'

    const handleChange = (event)=>{
        setsearcTerm(event.target.value);
    }

    return(
        <>
        {
            !simplified && <div className="search-crypto">
            <Input placeholder="Search Cryptocurrency" onChange={handleChange}></Input>
        </div>
        }
       
        <Row gutter={[32,32]} className="crypto-card-container">
            {
                cryptos?.map((crypto)=>(
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.rank}>
                        <Link to={`/crypto/${crypto.uuid}`}>
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