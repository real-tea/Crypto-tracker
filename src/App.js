import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';



function App() {

  const [coins,setCoins] = useState([]);

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res) => {
      setCoins(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div className="App">
      <div className = "coin">
        <h1>Search for a crypto currency</h1>
        <form>
          <input type = "text"
           placeholder = "search"
           className = "coin-text"
           />
        </form>
      </div>
      
    </div>
  );
}

export default App;
