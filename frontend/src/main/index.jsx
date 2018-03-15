import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app.jsx'


const store = createStore(reducers)
ReactDOM.render(
<App />
,document.getElementById('app'))