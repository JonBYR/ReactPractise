import './../App.css'
import React, {useState} from 'react'

// const Search = () => {
//     return (    
//     <section id="news-search">
//         <h2>News Search</h2>
//         <form method="get" action="http://www.bbc.co.uk/search">
//             <label htmlFor="search-term">Search term: </label>
//             <input type="text" id="search-term" name="q" defaultValue="Birmingham" />
//             <button type="submit" className="btn btn-outline-success">Search</button>
//         </form>
//     </section>
//     );
// }

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Birmingham');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        const query = encodeURIComponent(searchTerm);
        const url = `https://www.bbc.co.uk/search?q=${query}`;
        window.open(url, '_blank'); 
    };

return (
    <section id="search">
        <h2>News Search</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-term">Search term: </label>
            <input
                type="text"
                id="search-term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-success">Search</button>
        </form>
        <p>You searched for {searchTerm}</p>

    </section>
);
};

export default Search;