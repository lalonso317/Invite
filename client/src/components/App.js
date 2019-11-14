import React from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main  from  './Main'
import  Going  from './Going'
import NotGoing from './NotGoing'
import '../styles/main.css'
function App() {
 

  return (
    <Router>
    <Route exact path = '/' component={Main} />
    <Route path = '/Going' component={Going} />
    <Route path = '/NotGoing' component={NotGoing} />
    </Router>
  )
}

export default App
