import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots'  // The reason that we have robots with {} is because we want to have access to that array in that file

ReactDOM.render(
                <CardList robots={robots}/>
                    , document.getElementById('root'));


serviceWorker.unregister();
