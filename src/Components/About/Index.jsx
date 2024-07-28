import React from 'react';
import './style.scss';

const About = () => {
    return(
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='row'>
                            <div className="col-md-6">
                                <div className="jumbotron"
                                style={{
                                    marginTop: '60px',
                                    height: 400

                                }}></div>
                            </div>

                            <div className="col-md-6">
                                <h2 className="bold">Sobre</h2>
                                <p>Conheça mais sobre o organista <u className='bold'>Renato Franco</u>.</p>
                                <br />

                                <p>Renato Franco é um organista em formação, atualmente localizado
                                    na cidade de São Borja, Rio Grande do Sul, teve o despertar desta paixão
                                    no Mosteiro de São Bento em São Paulo, quando em uma visita se maravilhou
                                    ao som do um irmão beneditino que praticava no órgão de tubos do mosteiro.</p>
                                <br/>

                                <p>Desde então Renato tem dedicado seu tempo livro no estudo de instrumentos
                                    músicais como teclado, piano e órgão, apaixonando-se então pela música
                                    clássica e contemporânea.</p>
                                <br/>

                                <p>Sendo Engenheiro da Computação, a música ocupa um espaço terapêutico em
                                    sua vida, como um hobby, onde pode praticar músicas as quais tem grande interesse,
                                    sendo elas: Clássica, Sacra, Católica, Contemporânea</p>
                                <br/>

                                <p>Seu maior sonho é utilizar este dom descoberto, para servir a obra de Deus
                                    na igreja católica, participando da animação das missas, e quem sabe um dia
                                    compor um concerto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;