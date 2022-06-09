'use strict'
const Livro = use('App/Models/Livro');

class FotoController {
    
    async fotospublica({ params }) {
        const login = params.login;
        let fotos =[];

        if(login === 'teste') {
            fotos = [
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"jdarlan",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://ahazou.com/wp-content/uploads/2017/01/Screenshot_2017-01-10-10-35-31.png",
                    likeada:false,
                    likers:[],
                    comentarios:[],
                    comentario:"Comentario da Foto",
                    id: 1
                },
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"teste",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s320x320/25507728_1612087035518648_2411718586707568698_n.jpg?_nc_cat=0&efg=eyJpIjoibyJ9&oh=dcf6ff910f62d5a811a5055dd7f3745e&oe=5BF1938E",
                    likeada:false,
                    likers:[],
                    comentarios:[
                        {
                            login: "alots",
                            texto: "novo comentario",
                            id: 1
                        },
                        {
                            login: "rafael",
                            texto: "mais um comentario",
                            id: 2
                        },
                        {
                            login: "thiago",
                            texto: "ops comentario",
                            id: 3
                        }
                    ],
                    comentario:"Comentario da Foto",
                    id: 2
                }
            ]
        } else if(login === 'jdarlan') {
            fotos = [
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"carlos",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://ahazou.com/wp-content/uploads/2017/01/Screenshot_2017-01-10-10-35-31.png",
                    likeada:false,
                    likers:[],
                    comentarios:[],
                    comentario:"Comentario da Foto",
                    id: 4
                },
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"teste",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s320x320/25507728_1612087035518648_2411718586707568698_n.jpg?_nc_cat=0&efg=eyJpIjoibyJ9&oh=dcf6ff910f62d5a811a5055dd7f3745e&oe=5BF1938E",
                    likeada:false,
                    likers:[],
                    comentarios:[
                        {
                            login: "fulano",
                            texto: "novo comentario",
                            id: 1
                        },
                        {
                            login: "cicrano",
                            texto: "mais um comentario",
                            id: 2
                        },
                        {
                            login: "fulano",
                            texto: "ops comentario",
                            id: 3
                        }
                    ],
                    comentario:"Comentario da Foto",
                    id: 3
                }      
            ]
        }

        return fotos;
    }

    async alots({request}) {
        const data = request.only(['token']);
        const token = data.token;
        let fotos = [];

        if(token === 'AAAAAAAAAA') {
            fotos = [
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"jdarlan",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://ahazou.com/wp-content/uploads/2017/01/Screenshot_2017-01-10-10-35-31.png",
                    likeada:false,
                    likers:[],
                    comentarios:[],
                    comentario:"Comentario da Foto",
                    id: 1
                },
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"jdarlan",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s320x320/25507728_1612087035518648_2411718586707568698_n.jpg?_nc_cat=0&efg=eyJpIjoibyJ9&oh=dcf6ff910f62d5a811a5055dd7f3745e&oe=5BF1938E",
                    likeada:false,
                    likers:[],
                    comentarios:[
                        {
                            login: "alots",
                            texto: "novo comentario",
                            id: 1
                        },
                        {
                            login: "rafael",
                            texto: "mais um comentario",
                            id: 2
                        },
                        {
                            login: "thiago",
                            texto: "ops comentario",
                            id: 3
                        }
                    ],
                    comentario:"Comentario da Foto",
                    id: 2
                }
            ]
        } else if(token === 'XXXXXXXXXX') {
            fotos = [
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"teste",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://ahazou.com/wp-content/uploads/2017/01/Screenshot_2017-01-10-10-35-31.png",
                    likeada:false,
                    likers:[],
                    comentarios:[],
                    comentario:"Comentario da Foto",
                    id: 4
                },
                {
                    urlPerfil:"https://instagram.frec10-1.fna.fbcdn.net/vp/ba80238578d61aa09eb08c950206065d/5C01EED4/t51.2885-19/s150x150/14574181_801956873277605_7455121962298245120_a.jpg",
                    loginUsuario:"teste",
                    horario:"05/12/2016 16:21",
                    urlFoto:"https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s320x320/25507728_1612087035518648_2411718586707568698_n.jpg?_nc_cat=0&efg=eyJpIjoibyJ9&oh=dcf6ff910f62d5a811a5055dd7f3745e&oe=5BF1938E",
                    likeada:false,
                    likers:[],
                    comentarios:[
                        {
                            login: "fulano",
                            texto: "novo comentario",
                            id: 1
                        },
                        {
                            login: "cicrano",
                            texto: "mais um comentario",
                            id: 2
                        },
                        {
                            login: "fulano",
                            texto: "ops comentario",
                            id: 3
                        }
                    ],
                    comentario:"Comentario da Foto",
                    id: 3
                }      
            ]
        }

        return fotos 
    }

    async login({request, response}) {
        const data = await request.all();

        if(data.login === 'jdarlan') {
            response.send('AAAAAAAAAA')
        } else if(data.login === 'teste') {
            response.send('XXXXXXXXXX')
        } else {
            response.status(400).send([{msg:'erro de autenticacao.'}])
        }
        
    }

}

module.exports = FotoController
