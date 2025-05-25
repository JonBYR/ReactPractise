import {terrible} from './../data/tfs.js'
const terribleFilmSort = terrible.map((film) => {
    if(film.watch == true) return <li key = {film.id}>{film.name}</li>
    else return <li key = {film.id}><s>{film.name}</s></li>
});
const TerribleFilm = () => {
    return (
        <>
    <h1>List of Classic Terrible Films</h1>
    <ul>
        {terribleFilmSort}
    </ul>
    </>
    );
    
};
export default TerribleFilm;
