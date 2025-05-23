import FilmButton from "./filmbutton.js"
import FilmSearch from "./filmsearch.js";
const Base = () => {
    return (
        <>
    <section>
        <FilmButton name = "The Grand Budapest Hotel"></FilmButton>
        <FilmButton className = "p-6" name = "Suspiria"></FilmButton>
        <FilmButton className = "p-6" name = "The Rocky Horror Picture Show"></FilmButton>
        <FilmButton className = "p-6" name = "The Young Girls of Rochefort"></FilmButton>
        <FilmSearch></FilmSearch>
    </section>
    </>
    );
}
export default Base;