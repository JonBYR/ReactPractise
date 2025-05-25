
function whatRating(rate) {
    if(rate >= 80) return "This film is pretty good";
    else if(rate >= 60) 
    {
        return "This film is decent";
    }
    else if(rate >= 40) return "This film might be okay, but I wouldn't be sure";
    else return "This film sucks lol";
}

const Rating = (props) => {
    const ratingValue = props.value;
    return (
        <div>
            {ratingValue >= 80 && <p>This film is pretty good</p>}
            {ratingValue >= 60 && <p>This film is decent</p>}
            {ratingValue >= 40 && <p>This film might be okay, but I wouldn't be sure</p>}
            {ratingValue < 40 && <p>This film sucks lol</p>}
        </div>
    );
}
export default Rating;