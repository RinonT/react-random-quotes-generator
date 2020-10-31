import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const quoteFromAuthorUrl = 'https://quote-garden.herokuapp.com/api/v2/authors/'
 

export default function QuotesFromTheAutour() {
  const [quotesFromAuthor, setquotesFromAuthor] = useState([])
  const { authorName } = useParams();

  async function getQuotesFromAuthor() {
    const response = await fetch(quoteFromAuthorUrl + authorName + "?page=1&limit=10");
    const quotesData = await response.json();
    setquotesFromAuthor(quotesData.quotes);
  }


  useEffect (() => {
    getQuotesFromAuthor()
  }, [])

  if (!quotesFromAuthor) return null
   return (
     <article className="page--article">
      <h2 className="authorName">{authorName}</h2>
        <div className="quotes--container">
          {quotesFromAuthor.map(quote => <p className="quotes author--quotes" key={quote._id}><q>{quote.quoteText}</q></p>)}
        </div>
        <Link className="homepage-link" to="/">
        back to homepage
        </Link>
     </article>
   )
}