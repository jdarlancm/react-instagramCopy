import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return(
            <header className="header container">
                
                <h1 className="header-logo">
                Instalura
                </h1>
                
                <form className="header-busca">
                    <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo" />
                </form>
                
                <nav>
                    <ul className="header-nav">
                        <li className="header-nav-item">
                            <a href="#" className="fotoAtualizacoes-like">Likar</a>
                        </li>
                    </ul>
                </nav>

            </header>
        );
    }    
}