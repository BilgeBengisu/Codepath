import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer
} from 'recharts';
import './Dashboard.css';

export const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [yearData, setYearData] = useState([]);
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          'https://openlibrary.org/search.json?q=the+lord+of+the+rings'
        );
        const data = await res.json();
        setBooks(data.docs);
        setLoading(false);

        // Prepare chart data
        prepareCharts(data.docs);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const prepareCharts = (docs) => {
    // Chart 1: First Publish Year Distribution
    const yearCounts = {};
    docs.forEach((book) => {
      const year = book.first_publish_year;
      if (year) {
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      }
    });

    const yearDataArr = Object.entries(yearCounts).map(([year, count]) => ({
      year,
      count,
    })).sort((a, b) => a.year - b.year);

    setYearData(yearDataArr);

    // Chart 2: Most Frequent Authors
    const authorCounts = {};
    docs.forEach((book) => {
      const author = book.author_name ? book.author_name[0] : 'Unknown';
      authorCounts[author] = (authorCounts[author] || 0) + 1;
    });

    const topAuthors = Object.entries(authorCounts)
      .map(([name, count]) => ({ name, value: count }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    setAuthorData(topAuthors);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  if (loading) return <p>Loading books...</p>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Open Library Dashboard</h1>

      {/* Charts Section */}
      <div className="charts-container">
        <div className="chart-box">
          <h3>Books by First Publish Year</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearData}>
              <XAxis dataKey="year" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Top 5 Authors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={authorData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {authorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Book Cards */}
      <div className="dashboard-books">
        {books.map((book) => (
          <div key={book.key} className="book-card">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-meta">
              <strong>Author:</strong> {book.author_name ? book.author_name[0] : 'Unknown'}
            </p>
            <p className="book-meta">
              <strong>First Published:</strong> {book.first_publish_year || 'N/A'}
            </p>
            <Link
              to={`/book${book.key}`}
              className="book-link"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
