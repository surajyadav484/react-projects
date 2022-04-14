import React from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
    const {data, isFetching} = useGetCryptoExchangesQuery();

    console.log(data?.data);
    return(
        <div className="container">
            <h1>This endpoint is disabled for your subscription</h1>
        </div>
    );
}
export default Exchanges;