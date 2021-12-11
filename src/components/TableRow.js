import React from 'react'

export const TableRow = ({ coin }) => {

    return (
        <tr className='p-2'>
            <td>{coin.market_cap_rank}</td>
            <td className='flex items-center'>
                <img src={coin.image} alt={coin.name} className='w-1/12 mr-2' />
                <span>
                    {coin.name}
                </span>
                <label className='ms-2'>
                    {coin.symbol.toUpperCase()}
                </label>
            </td>
            <td>{coin.current_price}</td>
            <td>{parseFloat(coin.price_change_24h.toFixed(2))}</td>
            <td>{parseInt(coin.market_cap)}</td>
        </tr>
    )
}
