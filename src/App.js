import { useEffect, useState } from 'react';
import { TableCoins } from './components/TableCoins'
import axios from 'axios'
import { Button } from './components/ui/Button';

function App() {

  const [search, setSearch] = useState('')
  const [coins, setCoins] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const loadNextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${currentPage}`)
    .then(res => setCoins(res.data))
  }, [currentPage])

  return (
    <div className="w-full flex flex-col justify-start content-center bg-gray-900 p-10 min-h-screen">
      <h1 className='text-3xl text-center font-bold text-white'>Coin Gecko Crypto-Market</h1>
      <input
        className='my-5 py-2 px-4 rounded outline bg-gray-700 text-white focus:outline-none'
        type="text"
        placeholder='Search a coin'
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableCoins coins={coins} search={search} />
      <Button
        text='Cargar mas'
        onClick={loadNextPage}
      />
    </div>
  );
}

export default App;
