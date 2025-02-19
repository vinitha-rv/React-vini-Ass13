
import React, { useEffect, useState } from 'react';
import './App.css';

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error.message}</div>;

    return (
        <div className="container">
            <h1 className="title">User contact ID List</h1>
            <div className="card-container">
                {users.map((user) => (
                    <div key={user.id} className="card">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchUsers;
