import { useState } from 'react';

export default function CrewmateForm({ initialData = {}, onSubmit }) {
  const [name, setName] = useState(initialData.name || '');
  const [color, setColor] = useState(initialData.color || 'red');
  const [role, setRole] = useState(initialData.role || 'Engineer');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, color, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input value={name} onChange={(e) => setName(e.target.value)} required /></label>
      <label>Color: 
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </label>
      <label>Role: 
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Engineer</option>
          <option>Captain</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
