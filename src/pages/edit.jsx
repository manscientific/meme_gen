import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/txt";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const imgUrl = params.get("imgurl");
  const [count, setCount] = useState(0);
  const memeRef = useRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* Inline dark mode CSS */}
      <style>{`
        body {
          margin: 0;
          background-color: #121212;
          color: #ffffff;
          font-family: sans-serif;
        }

        .meme {
          border: 2px solid #333;
          background-color: #1e1e1e;
          border-radius: 8px;
          padding: 1rem;
        }

        button {
          padding: 0.5rem 1rem;
          background-color: #333;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        button:hover {
          background-color: #444;
        }
      `}</style>

      <div style={{ padding: "2rem" }}>
        {/* Meme container to export */}
        <div
          ref={memeRef}
          className="meme"
          style={{
            position: "relative",
            display: "inline-block",
            maxWidth: "100%",
          }}
        >
          <img
            src={imgUrl}
            alt="no image"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

          {/* Overlay Text Components */}
          {Array(count)
            .fill(0)
            .map((_, idx) => (
              <Text key={idx} />
            ))}
        </div>

        {/* Controls */}
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <button onClick={addText}>Add Text</button>
          <button onClick={() => exportComponentAsJPEG(memeRef)}>Save</button>
        </div>
      </div>
    </>
  );
};

export default EditPage;
