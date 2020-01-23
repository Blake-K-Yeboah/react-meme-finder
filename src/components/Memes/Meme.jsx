import React from 'react'

const Meme = ({ meme }) => {
    return (
        <li className="meme-item">
            <img className="meme-img" src={meme.url} alt={meme.name} />
            <h2 className="meme-title">{meme.name}</h2>
        </li>
    )
}

export default Meme
