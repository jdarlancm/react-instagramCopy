import React, { Component } from 'react';
import queryString from 'query-string';

export default class Login extends Component {

    constructor(props) {
        super();
        let params = queryString.parse(props.location.search)
        this.state = {msg: params.msg};
    }

    envia = (event) => {
        event.preventDefault();

        const requestInfo = {
            method:'POST',
            body: JSON.stringify({login:this.login.value, senha:this.senha.value}),
            headers: new Headers({
                'Content-type':'application/json'
            })
        }

        fetch('http://localhost:3333/login',requestInfo)
        .then(response => {
            if(response.ok) {
                this.setState({msg:''})
                return response.text();
            } else {
                throw new Error('não foi possível fazer o login.');
            }
        })
        .then(token => {
            localStorage.setItem('auth-token',token);
            this.props.history.push('timeline');
        })
        .catch(error => this.setState({msg: error.message}));
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span className="login-msg-erro">{this.state.msg}</span>
                <form onSubmit={this.envia}>
                    <input type="text" ref={(input) => this.login = input} />
                    <input type="password" ref={(input) => this.senha = input} />
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }
}