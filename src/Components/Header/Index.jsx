import React from 'react';
import './style.scss';

const Header = () => {
    return(
        <header id="header">
            <nav className="navbar navbar-default">
                <div className="container container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Minha Marca</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;