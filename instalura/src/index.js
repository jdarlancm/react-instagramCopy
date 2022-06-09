import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { matchPath } from 'react-router'

import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';

import registerServiceWorker from './registerServiceWorker';

import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

const match = matchPath('/timeline/jdarlan', {path: '/timeline/:login?', exact: true, strict: false})


console.log(match.params.login);

ReactDOM.render(
    (<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/timeline/:login?" render={(props) => 
                ( (props.match.params.login === undefined) && (localStorage.getItem('auth-token')  === null)) ? (
                    <Redirect to="/?msg=você precisa estar logado para acessar o endereço"/>
                ) : (
                    <App {...props}/>
                )
            } />
            <Route path='/logout' component={Logout} />
        </Switch> 
    </BrowserRouter>)
    , document.getElementById('root'));
registerServiceWorker();
