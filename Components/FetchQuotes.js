import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RandomButton from './RandomButton';

const randomQuoteUrl = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'

export default function getQuotes() {
    const [quote, setQuote] = useState({})

    async function getQuotes() {
        const response = await fetch(randomQuoteUrl)
        const randomQuote = await response.json()
        setQuote(randomQuote.quote)
    }

    useEffect(() => {
        getQuotes()
    }, [])

    function showRandomQuote() {
        getQuotes()
    }

    if (!quote) {
        return null;
    } 
    
    return (
        <article className="page--article">
            <div className="btn--container">
                <RandomButton handleClick={showRandomQuote}/>
            </div>
            <div className="quotes--container">
                <p className="quotes"> <q>{quote.quoteText}</q></p>
            </div>
            <Link to={`/${quote.quoteAuthor}`}>
                <div className="quotes--description">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>
                    <p className="author">{quote.quoteAuthor}</p>
                    <p className="">{quote.quoteGenre}</p>
                </div>
            </Link>
        </article>
    )
}