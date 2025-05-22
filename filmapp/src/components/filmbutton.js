import React, {useState} from 'react';
import {films} from './../data/films.js';
import Film from './film.js';
import './../App.css';
const FilmButton = (props) => {
    const [film, setFilm] = useState('');
    const handleFilmClick = (name) => {
        let filtered = films.filter((n) => n === name);
        setFilm(filtered[0]);
    }
    return (
        <>
        <div style= {{
            padding: '50px',
            textAlign: 'center',
        }}
        >
            {/*  can either assign onClick to a function (handleClick) or use inline javascript - here we are calling the setColour function */}
            <button onClick = {() => handleFilmClick(props.name)}>{props.name}</button>
            {film && <Film content = {film}></Film>}
         </div>
        </>
    );
}
export default FilmButton;