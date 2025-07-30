import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css';

import { useLocation } from 'react-router-dom';

export const BookDetail = () => {
  const location = useLocation();
  const id = location.pathname.replace('/book/', '');
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/${id}.json`);
        const data = await res.json();
        setBook(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch book details:', err);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>No book found.</p>;

  return (
    <div className="book-detail-container">
      <h1 className="book-title">{book.title}</h1>

      {/* Description */}
      {book.description && (
        <div className="book-section">
          <h2>Description</h2>
          <p>
            {typeof book.description === 'string'
              ? book.description
              : book.description.value}
          </p>
        </div>
      )}

      {/* Additional Info */}
      <div className="book-section">
        <h2>Book Details</h2>
        <ul className="book-info-list">
          {book.first_publish_date && (
            <li><strong>First Published:</strong> {book.first_publish_date}</li>
          )}
        </ul>
      </div>
    </div>
  );
};
