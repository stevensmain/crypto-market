import React from 'react'

export const Button = ({text, onClick}) => {
    return (
        <button
        onClick={onClick}
        className='rounded bg-indigo-600 w-full px-4 py-2 text-white mt-2'
        >
            {text}
        </button>
    )
}