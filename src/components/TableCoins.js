import React from 'react'
import { TableRow } from './TableRow'

export const TableCoins = ({ coins, search }) => {

    const filtredCoin = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) 

    const titles = ['#', 'Currency', 'Price', '24hr change', 'Volumen']

    return (
        <table className='overflow-scroll w-full text-white'>
            <thead className='bg-gray-700 font-bold'>
                <tr>
                    {
                        titles.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody className='bg-gray-700'>
                {
                    filtredCoin.map((coin) => 
                        <TableRow
                            key={coin.id}
                            coin={coin}
                        />
                    )
                }
            </tbody>
        </table>
    )
}
