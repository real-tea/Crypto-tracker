import React from 'react'

const Coin = (props) => {
    return (
        <div className = 'list-group-item d-flex justify-content-between align-items-center'>
            <div>
                <div>
                    <img src = { props.image } alt = "web3 crypto"/>
                    <h1>{ props.name }</h1>
                    <p>{ props.symbol }</p>

                    <div>
                        <p>${ props.price }</p>
                        <p>{ props.volume.toLocaleString() }</p>

                        <p>{ props.priceChange.toFixed(3) }</p>

                        <p>{ props.marketCap }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin;
