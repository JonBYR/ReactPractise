const Film = (props) => {
    const filmObject = props.content;
    const title = filmObject.Title;
    const year = filmObject.Year;
    const image = filmObject.Poster;
    return (
        <div className = "text-center m-3">
            <p>{title}</p>
            <p>{year}</p>
            <img src = {image} alt = {"This is a picture of " + title}></img>
        </div>
    );
}
export default Film;