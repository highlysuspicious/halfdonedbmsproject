import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PassengerList = () => {
    const [passengers, setPassengers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPassengers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/passenger');
                console.log('API Response:', response.data); // Debugging line

                if (Array.isArray(response.data)) {
                    setPassengers(response.data);
                } else {
                    setError('Unexpected response format');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            }
        };

        fetchPassengers();
    }, []);

    return (
        <div>
            <h1>Passenger List</h1>
            {error && <div>Error: {error}</div>}
            <ul>
                {Array.isArray(passengers) ? (
                    passengers.map((passenger, index) => (
                        <li key={index}>
                            Name: {passenger[0]}, Age: {passenger[1]}
                        </li>
                    ))
                ) : (
                    <li>No passengers found</li>
                )}
            </ul>
        </div>
    );
};

export default PassengerList;
