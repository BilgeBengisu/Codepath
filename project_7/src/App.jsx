import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage.jsx';
import SummaryPage from './pages/SummaryPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import EditPage from './pages/EditPage.jsx';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SummaryPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/crewmate/:id" element={<DetailPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}