import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_BASE = "https://collectionapi.metmuseum.org/public/collection/v1";

export default function App() {
  const [artwork, setArtwork] = useState(null);
  const [banList, setBanList] = useState({
    century: [],
    culture: [],
  });
  const [objectIDs, setObjectIDs] = useState([]);

  const fetchObjectIDs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/search?hasImages=true&q=painting`);
      setObjectIDs(res.data.objectIDs || []);
    } catch (error) {
      console.error("Error fetching object IDs:", error);
    }
  };

  const fetchRandomArtwork = async () => {
    if (objectIDs.length === 0) return;
    let found = false;
    let result;

    while (!found) {
      const randomID = objectIDs[Math.floor(Math.random() * objectIDs.length)];
      const res = await axios.get(`${API_BASE}/objects/${randomID}`);
      const art = res.data;

      const century = art.objectDate;
      const culture = art.culture;

      if (
        century &&
        culture &&
        !banList.century.includes(century) &&
        !banList.culture.includes(culture) &&
        art.primaryImage
      ) {
        result = art;
        found = true;
      }
    }

    setArtwork(result);
  };

  const toggleBan = (type, value) => {
    setBanList((prev) => {
      const updated = [...prev[type]];
      return {
        ...prev,
        [type]: updated.includes(value)
          ? updated.filter((v) => v !== value)
          : [...updated, value],
      };
    });
  };

  useEffect(() => {
    fetchObjectIDs();
  }, []);

  useEffect(() => {
    if (objectIDs.length > 0) fetchRandomArtwork();
  }, [banList, objectIDs]);

  return (
    <div className="container">
      <h1>🖼️ Met Museum Art Explorer</h1>
      <button className="discover-button" onClick={fetchRandomArtwork}>
        Discover New Artwork
      </button>

      {artwork && (
        <div className="art-card">
          <img src={artwork.primaryImage} alt={artwork.title} className="art-image" />
          <h2>{artwork.title}</h2>
          <p>
            Century: <span className="clickable" onClick={() => toggleBan("century", artwork.objectDate)}>{artwork.objectDate}</span>
          </p>
          <p>
            Culture: <span className="clickable" onClick={() => toggleBan("culture", artwork.culture)}>{artwork.culture}</span>
          </p>
          <p>Artist: {artwork.artistDisplayName || "Unknown"}</p>
        </div>
      )}

      <div className="ban-list">
        <h3>🚫 Ban List</h3>
        {Object.entries(banList).map(([type, values]) => (
          <div key={type}>
            <strong>{type}:</strong>
            {values.map((val) => (
              <span
                key={val}
                className="ban-tag"
                onClick={() => toggleBan(type, val)}
              >
                {val} ✕
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}