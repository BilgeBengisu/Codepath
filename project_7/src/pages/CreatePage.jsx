import {useNavigate } from 'react-router-dom';
import CrewmateForm from '../components/CrewmateForm';
import { createCrewmate } from '../api/crewmates';

export default function CreatePage() {
    const navigate = useNavigate();

    const handleCreate = async (crewmateData) => {
        const crewmate = await createCrewmate(crewmateData);
        navigate('/');
    };

    return (
        <div>
            <h1>Create a New Crewmate</h1>
            <CrewmateForm onSubmit={handleCreate} />
        </div>
    )

}