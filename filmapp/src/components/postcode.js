import { useState } from 'react';
import axios from 'axios';

function Postcode() {
    const [postcode, setPostcode] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const { data } = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);
            setResult(data.result);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to fetch');
            setResult(null);
        }
    };

        //   const handleSearch = async () => {
        //     try {
        //       const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
        //       const data = await response.json();

        //       if (response.ok) {
        //         setResult(data.result);
        //         setError(null);
        //       } else {
        //         setError(data.error || 'Postcode not found');
        //         setResult(null);
        //       }
        //     } catch (err) {
        //       setError('Failed to fetch');
        //       setResult(null);
        //     }
        //   };

        return (
            <div className="p-4 max-w-md mx-auto">
                <h1 className="text-xl font-bold mb-4">Postcode Lookup</h1>
                <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Enter postcode"
                    className="border p-2 w-full mb-2"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Search
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {result && (
                    <div className="mt-4 border p-4 rounded bg-gray-100">
                        <p><strong>Postcode:</strong> {result.postcode}</p>
                        <p><strong>Country:</strong> {result.country}</p>
                        <p><strong>Region:</strong> {result.region}</p>
                        <p><strong>Longitude:</strong> {result.longitude}</p>
                        <p><strong>Latitude:</strong> {result.latitude}</p>
                    </div>
                )}
            </div>
        );
    }

    export default Postcode;