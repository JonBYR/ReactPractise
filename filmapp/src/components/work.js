import './../App.css'

const Work = () => {
    return (
    <>
        <section className="text-center">
            <h2 id="work-experience">Work Experience</h2>
        </section>
        <table className="table table-hover">
            <caption>Employment History</caption>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Company</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Trainer Lead</td>
                    <td>Sparta Global</td>
                    <td>May 2022</td>
                    <td>Present</td>
                </tr>
                <tr>
                    <td>Trainer</td>
                    <td>Sparta Global</td>
                    <td>Jan 2020</td>
                    <td>
                        April 2020
                    </td>
                </tr>
                <tr>
                    <td>Senior Developer</td>
                    <td>Renishaw</td>
                    <td>March 2018</td>
                    <td>Dec 2019</td>
                </tr>
                <tr>
                    <td>Developer</td>
                    <td>Codeweavers</td>
                    <td>April 2017</td>
                    <td>February 2018</td>
                </tr>
                <tr>
                    <td>Principal Lecturer</td>
                    <td>Staffordshire University</td>
                    <td>April 2008</td>
                    <td>April 2017</td>
                </tr>
            </tbody>
        </table>    
    </>
    );

}
export default Work;