import './../App.css'
import Overview from './overview'
import List from "./list.js"
import Table from "./table.js"
import Work from "./work"
import Buttons from "./buttons.js"
import Postcode from "./postcode.js"
import {education} from "./../data/education.js"
import {hobbies} from './../data/hobbies.js'

const Main = () => {

    const skills = [
        { id: 1, value: "Teaching" },
        { id: 2, value: "Programming" },
        { id: 3, value: "Agility Training" }];
    // const hobbies = [
    //     { id: 1, value: "Crown Green Bowls" },
    //     { id: 2, value: "Canoeing" },
    //     { id: 3, value: "Ice Skating" },
    //     { id: 4, value: "Crosswords" }
    // ];
    return (
        <section>
            <Overview 
                headline="All About me"
                firstStatement="I am a Lead Trainer at Sparta Global specialing in full-stack and back end development."
                secondStatement="I have over 25 years experience teaching Software Engineering and Games Programming."
            />
            <List title="My Skills" content={skills} />
            <List title="My Hobbies" content={hobbies} />
            <List title="My Outdoor Hobbies" content={hobbies.filter(hobby => hobby.category === "Outdoor")} />
            <List title="My Indoor Hobbies" content={hobbies.filter(hobby => hobby.category === "Indoor")} />
            <List title="My Skating Hobbies" content={hobbies.filter(hobby => hobby.value.includes("Skating"))} />
            <Table title="My Education" caption="Education" data={education} />
            <Work />
            <Buttons />
            <Postcode />
        </section>
    );
}

export default Main;