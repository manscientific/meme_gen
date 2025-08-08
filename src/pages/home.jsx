import React, { useEffect, useState } from 'react';
import MemeCard from "../components/cards";
import { getAllMemes } from '../api/memes';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <>
      {/* Inline CSS for dark mode */}
      <style>{`
        body {
          margin: 0;
          background-color: #121212;
          color: #ffffff;
          font-family: sans-serif;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding: 2rem;
        }

        .meme-card {
          background-color: #1e1e1e;
          color: #fff;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
      `}</style>

      <div className='row'>
        {data.map(el => (
          <MemeCard key={el.id} image={el.url} title={el.name} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
