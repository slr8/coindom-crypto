import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';

const Hero = () => {
    const [data, setData] = useState([]);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error!");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [url]);

    console.log(data)
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="heroSection">
                        <img src="/images/hero/ethereum.png" className='heroFirstImage' />
                        <h1 className='heroText'>TRACK AND TRADE <br />
                            <span className='heroSpan'>CRYPTO CURRENCIES</span></h1>
                        <img src="/images/hero/bitcoin.png" className='heroSecondImage' />
                    </div>
                    <div className="coins">
                        {data.map((item) => {
                            return (
                                <div className="coin" key={item.id}>
                                    <img className='coinImage' src={item.image} />
                                    <p className="coinPara">{item.name} <span className={
                                        "spanPara " + (item.price_change_percentage_24h <= 0
                                            ? "red"
                                            : "green")}>{item.price_change_percentage_24h?.toFixed(2) + "%"}</span></p>
                                    <p className="coinPrice">$ {item.current_price?.toFixed(2)}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero