import React, { Component } from 'react';
import './Submenu.scss';


class Submenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="nav-secundaria">
                <div className="container">

                    <button id="hamburger-nav-principal" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#1">Notícias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#2">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#3">Portfólio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#4">Fornecedores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#5">Serviços</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Submenu;

