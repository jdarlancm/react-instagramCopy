import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {fotos:[]};
    }

    carregaFotos() {
        let urlPerfil;
        
        if(this.props.login === undefined) {
            urlPerfil = `http://localhost:3333/fotos?token=${localStorage.getItem('auth-token')}`;
        } else {
            urlPerfil = `http://localhost:3333/public/fotos/${this.props.login}`;
        }

        fetch(urlPerfil)
        .then(response => response.json())
        .then(fotos => {
            this.setState({fotos:fotos});
        });
    }
    
    componentDidUpdate(preventProps) {
        if(this.props.login !== preventProps.login) {
            this.carregaFotos();
        }
    }

    componentDidMount() {
        this.carregaFotos();
    }

    render() {
        return(
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
                }
            </div>
       );
    }    
}