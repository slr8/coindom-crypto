import React, { useEffect, useState } from 'react'

const MarketUpdate = () => {
    const [data, setData] = useState([]);
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, [url]);
    console.log(data)

    return (
        <>
            <div className="marketSection" id='market'>
                <div className="container">
                    <div className="header">
                        <h1>Market Update</h1>
                    </div>
                    <div className="markets">
                        <div className="marketHeader">
                            <span className="firstMarketSpan">Coin</span>
                            <span className="marketSpan">Price</span>
                            <span className="marketSpan">24h Change</span>
                            <span className="marketSpan">Market Cap</span>
                        </div>
                        { }
                        {data.map((item) => {
                            return (
                                <div
                                    className="market"
                                    key={item.id} ><span>
                                        <img src={item.image} alt={item.name} /> {item.name}
                                    </span>
                                    <p>{"$ " + item.current_price.toFixed(2)}</p>
                                    <p
                                        className={
                                            (item.price_change_percentage_24h >= 0
                                                ? "green"
                                                : "red")
                                        }
                                    >
                                        {item.price_change_percentage_24h?.toFixed(2) + " %"}
                                    </p>
                                    <p>{"$ " + item.market_cap}</p></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketUpdate