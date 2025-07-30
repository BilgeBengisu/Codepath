import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCrewmate } from '../api/crewmates';

export default function DetailPage() {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);

    useEffect (() => {
        const load = async () => {
            const data = await fetchCrewmate(id);
            setCrewmate(data);
        };
        load();
    }, [id]);

    if (!crewmate) return <p>Loading...</p>;

    return (
        <div>
        <h2>{crewmate.name}</h2>
        <p>Color: {crewmate.color}</p>
        <p>Role: {crewmate.role}</p>
        <p>Created: {new Date(crewmate.created_at).toLocaleString()}</p>
        <Link to={`/edit/${id}`}>Edit</Link>
        </div>
    );
}