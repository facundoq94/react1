import React, { Component, Fragment } from 'react';
import Button from '@mui/material/Button';

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
    render() {
        return(
            <div className="card">
                <h1 className="titulo">Pelicula</h1>
                <Actores />
                <Button variant="contained">guardar</Button>
            </div>
        )
    }
}

export default Film;