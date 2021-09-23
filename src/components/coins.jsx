import React from 'react'

const Coins = (props) => {
    return (
        <div>
            <div>
                <div>
                    <img src = { props.image } alt = "web3 crypto"/>
                    <h1>{ props.name }</h1>
                    <p>{ props.symbol }</p>

                    <div>
                        <p>${ props.price }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coins;
