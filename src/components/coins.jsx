import React from 'react'

const Coin = (props) => {
    return (
        <div className = 'coin-container'>
            <div className = 'coin-row'>
                <div className = 'coin'>
                    <img src = { props.image } alt = "web3 crypto"/>
                    <h3>{ props.name }</h3>
                    <p className = 'coin-symbol'>{ props.symbol }</p>

                    <div className = 'coin-data'>
                        <p className = 'coin-price'>${ props.price }</p>
                        <p className = 'coin-volume'>{ props.volume.toLocaleString() }</p>

                        {props.priceChange < 0 ? (
            <p className='coin-percent red'>{props.priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{props.priceChange.toFixed(2)}%</p>
          )}

                        <p className = "coin-marketcap">{ props.marketCap }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin;
