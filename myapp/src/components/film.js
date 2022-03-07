import React, { Component, Fragment } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './header';
import portada from "../assets/img/lagranestafa.jpg";

export class Actores extends Component {
    actores = ["di caprio", "brad pitt", "angelina jolie"];
    render() {
        return(
            <Fragment>
                <h1>Actores</h1>
                {
                    this.actores.map(actor=> (
                        <li>{actor}</li>  
                    ))
                }
            </Fragment>            
        )
    }
}

class Film extends Component {
    actores = ["di caprio", "brad pitt", "angelina jolie"];

    countActores() {
        return this.actores.length;
    }

    render() {
        return(
            <div className="film">

                    <img src={portada} className="portada" />
                    <h1> {this.props.titulo} </h1>
                    <h1> {this.countActores()} </h1>
                        <ul>
                            { this.actores.map((actor, index) => (
                               <li key={index}> {actor} </li> 
                            )) 
                            }
                        </ul> 
            </div>
        )
    }
}

class Film2 extends Component {
    actores = ["di caprio", "brad pitt", "angelina jolie"];
    render() {
        return(
            <div className="film">

                    <img src={portada} className="portada" />
     
            </div>
        )
    }
}

export default Film;