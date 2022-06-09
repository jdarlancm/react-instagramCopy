import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FotoHeader extends Component {
    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                <img src={this.props.foto.urlPerfil} alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                    <Link to={`/timeline/${this.props.foto.loginUsuario}`}>
                        {this.props.foto.loginUsuario}
                    </Link>
                </figcaption>
                </figure>
                <time className="foto-data">{this.props.foto.horario}</time>
            </header>
        );
    }
}

class FotoInfo extends Component {
    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">
                    {
                        this.props.foto.likers.map(liker => {
                            return (
                                <Link key={liker.login} to={`/timeline/${liker.login}`}>{liker.login},</Link>
                            )
                        })
                    }
                    curtiram
                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    {this.props.foto.comentario}
                </p>

                <ul className="foto-info-comentarios">
                    {
                        this.props.foto.comentarios.map(comentario => {
                            return (
                                <li className="comentario" key={comentario.id}>
                                    <Link to={`/timeline/${comentario.login}`} className="foto-info-autor">{comentario.login} </Link>
                                    {comentario.texto}
                                </li>
                            )
                        })
                    }
                
                </ul>
            </div>
        );
    }
}

class FotoAtualizacoes extends Component {

    constructor(props) {
        super(props);
        this.state = {likeada : this.props.foto.likeada};
    }

    like = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3333/fotos/${this.props.foto.id}/like?token=${localStorage.getItem('auth-token')}`,{method:'POST'})
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("não foi possível realizar o like da foto");
            }
        })
        .then(liker => {
            this.setState({likeada : !this.state.likeada})
            console.log(liker);
        });
    }

    render() {
        return (
            <section className="fotoAtualizacoes">
                <a onClick={this.like} className={this.state.likeada ? 'fotoAtualizacoes-like-ativo' : 'fotoAtualizacoes-like'}>Likar</a>
                <form className="fotoAtualizacoes-form">
                <input type="text" placehold="Adicione um comentario" className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>
            </section>
        );
    }
}

export default class FotoItem extends Component {
    render() {
        return (
            <div className="foto">
                <FotoHeader foto={this.props.foto} />
                <img alt="foto" className="foto-src" src={this.props.foto.urlFoto} /> 
                <FotoInfo foto={this.props.foto} />
                <FotoAtualizacoes foto={this.props.foto} />
            </div>
        );
    }
}