import FilmButton from "./filmbutton.js"
const Base = () => {
    <>
    <section>
        <FilmButton name = "The Grand Budapest Hotel"></FilmButton>
        <FilmButton className = "p-6" name = "Suspiria"></FilmButton>
        <FilmButton className = "p-6" name = "The Rocky Horror Picture Show"></FilmButton>
        <FilmButton className = "p-6" name = "The Young Girls of Rochefort"></FilmButton>
    </section>
    </>
}
export default Base;