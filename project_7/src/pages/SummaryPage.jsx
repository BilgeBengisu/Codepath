import {useEffect, useState } from 'react';
import { fetchCrewmates } from '../api/crewmates';
import { Link } from 'react-router-dom';

export default function SummaryPage() {
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        const load = async () => {
            const data = await fetchCrewmates();
            setCrew(data);
        };
        load();
    }, []);

    return (
        <div>
            <h2>All Crewmates</h2>
            <Link to="/create">+ Create Crewmate</Link>
            <ul>
                {crew.map(c => (
                    <li key={c.id}>
                        <Link to={`/crewmate/${c.id}`}>{c.name} - {c.color} - {c.role}</Link>
                        <Link to={`/edit/${c.id}`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}