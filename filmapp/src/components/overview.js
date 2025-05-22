import './../App.css';
const Overview = (props) => {
    return (
        <section className="text-center">
            <h2 id="overview">{props.headline}</h2>
            <p className="lead">{props.firstStatement}</p>
            <p className="fst-italic fw-bold text-uppercase">{props.secondStatement}</p>
        </section>
    )
}

export default Overview;