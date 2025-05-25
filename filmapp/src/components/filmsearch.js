import { useState } from "react";
import axios from 'axios';
import Film from './film.js';
import {key} from './../data/apiKey.js';
import Rating from './rating.js';
function FilmSearch() {
    const [film, setFilm] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    const handleSearch = async () => {
        
            try {
               const response = await fetch(`http://www.omdbapi.com/?t=${film}&apikey=${key}`);
               const data = await response.json();

               if (response.ok) {
                 setResult(data);
                 setError(null);
                 console.log(data);
               } else {
                 setError(data.error || 'Postcode not found');
                 setResult(null);
               }
             } catch (err) {
               setError('Failed to fetch');
               setResult(null);
             }
        }
    const handleForm = async (e) => {
        e.preventDefault();
        setFilm(e.target.value);
        setStatus('submitting');
    }
    return (
        <div className="p-4 max-w-md mx-auto">
                <h1 className="text-xl font-bold mb-4">Film Lookup</h1>
                <input
                    type="text"
                    value={film}
                    onChange={(e) => setFilm(e.target.value)}
                    placeholder="Enter film"
                    className="border p-2 w-full mb-2"
                />
                <button
                    onClick={() => handleSearch()}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {result != null && (
                    <div className="mt-4 border p-4 rounded bg-gray-100">
                        <Film content = {result} />
                        <Rating value = {result.Metascore} />
                    </div>
                )}
            </div>
        );
}
export default FilmSearch;