import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Root from './Root';
import Header1 from './Comp/Header1';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Wordsstories from './Comp/Wordsstories';
import Signup from './Signup';
import Authpage from './Authpage';



ReactDOM.render(

<BrowserRouter>
<Root></Root>
</BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

