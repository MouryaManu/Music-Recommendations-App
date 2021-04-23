import "./styles.css";
import React, { useState } from "react";

const MusicDictionary = {
  Pop: [
    { name: "BTS Band", rating: "5/5" },
    { name: "Billie Ellish", rating: "4/5" }
  ],
  Acoustic: [
    { name: "Ed Sheeran", rating: "5/5" },
    { name: "Taylor Swift", rating: "4.5/5" }
  ],
  Rock: [
    { name: "Imagine Dragons", rating: "4.5/5" },
    { name: "The Weeknd", rating: "5/5" }
  ]
};
var genres = Object.keys(MusicDictionary);

export default function App() {
  var [list, setlist] = useState("Pop");

  function onclickHandler(genre) {
    setlist(genre);
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "left", marginLeft: "3rem" }}>🎵 Good Music </h1>
      <h3 style={{ textAlign: "left", marginLeft: "3rem" }}>
        See my favourite Artists. Select a genre to see.{" "}
      </h3>
      <hr />
      <h3 style={{ textAlign: "left" }}>
        {" "}
        {genres.map(function (genre) {
          return (
            <span
              key={genre}
              onClick={() => onclickHandler(genre)}
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                margin: "1rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                marginLeft: "3rem"
              }}
            >
              {genre}
            </span>
          );
        })}
      </h3>
      <hr />
      <div>
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          {MusicDictionary[list].map((artist) => (
            <li
              key={artist.name}
              style={{
                border: "1px solid black",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                margin: "1rem 0rem",
                maxWidth: "240px",
                fontWeight: "bolder",
                fontSize: "1.25rem"
              }}
            >
              {" "}
              <div>{artist.name} </div>
              <div style={{ fontSize: "small" }}>{artist.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
