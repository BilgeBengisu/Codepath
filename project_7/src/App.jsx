import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage';
import SummaryPage from './pages/SummaryPage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SummaryPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/crewmate/:id" element={<DetailPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}

export default App
