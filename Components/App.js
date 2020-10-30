import React from 'react'
import Header from './Header'
import FetchQuotes from './FetchQuotes'
import QuotesFromTheAutour from './QuotesFromAuthor'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


export default function App () {
  return (
      <>
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/:authorName">
          <QuotesFromTheAutour />
        </Route>
        <Route path="/">
          <FetchQuotes />
        </Route>
      </Switch>
    </Router>
    </>
  )
}