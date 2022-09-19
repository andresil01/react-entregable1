import React from 'react'
import Button from './Button'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

    const colorObj = {
        color: randomColor
    }

   

    return (
        <article className='card' style={colorObj}>
            <p className='card_quote'>{randomQuote.quote}</p>
            <h1 className='card_author'>{randomQuote.author}</h1>
            <Button 
            getRandomAll={getRandomAll}
            randomColor={randomColor}
            />
        </article>
    )
}

export default QuoteBox