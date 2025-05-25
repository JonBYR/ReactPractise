import {useState} from 'react';
const Panel = (props) => {
    return (
        <>
            <section className = "panel">
                <h3>{props.title}</h3>
                {props.active && <p>{props.info}</p>}
                {!props.active && <button onClick = {props.onShow}>Show</button>}
            </section>
        </>
    )
}
const Facts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
        <Panel title = "Boris Karloff" info = "His final film appearance was in Targets" active = {activeIndex === 0} onShow = {() => setActiveIndex(0)}></Panel>
        <Panel title = "Brian De Palma" info = "His first film was called Hi Mom! and starred De Niro" active = {activeIndex === 1} onShow = {() => setActiveIndex(1)}></Panel>
        </>
    );
    
}
export default Facts;