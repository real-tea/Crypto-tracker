import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Coins from './components/coins';



function App() {

  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useStat("");

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res) => {
      setCoins(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const handler = (e) =>{
    setSearch(e.target.value);
  }

  const coinMapper = coins.filter((coin) =>{
    coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <div className = "coin">
        <h1>Search for a crypto currency</h1>
        <form>
          <input type = "text"
           placeholder = "search"
           className = "coin-text"
           onChange = {handler}
           />
        </form>
      </div>
      {coinMapper.map(coin => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      
    </div>
  );
}

export default App;
