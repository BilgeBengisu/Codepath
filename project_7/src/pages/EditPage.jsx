import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCrewmate, updateCrewmate, deleteCrewmate } from '../api/crewmates';
import CrewmateForm from '../components/CrewmateForm';

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchCrewmate(id);
      setCrewmate(data);
    };
    load();
  }, [id]);

  const handleUpdate = async (updates) => {
    await updateCrewmate(id, updates);
    navigate('/');
  };

  const handleDelete = async () => {
    await deleteCrewmate(id);
    navigate('/');
  };

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Crewmate</h2>
      <CrewmateForm initialData={crewmate} onSubmit={handleUpdate} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
