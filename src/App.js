import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const action = [
    { key: "1", movieName: "John Wick", rating: 4.5 },
    { key: "2", movieName: "The Mechanic", rating: 4.2 },
    { key: "3", movieName: "The Transporter", rating: 4.4 }
  ];
  const comedy = [
    { key: "1", movieName: "Dumb & Dumber", rating: 5 },
    { key: "2", movieName: "The Hangover", rating: 5 },
    { key: "3", movieName: "Golmaal", rating: 5 }
  ];
  const horror = [
    { key: "1", movieName: "The Evil Dead", rating: 5 },
    { key: "2", movieName: "The Incidious", rating: 4.2 },
    { key: "3", movieName: "The Anabella", rating: 4.5 }
  ];
  const [currentGenre, setCurrentGenre] = useState("");
  const actionHandler = (id) => {
    setCurrentGenre(
      (id === 1 ? action : id === 2 ? comedy : horror).map((item) => {
        return (
          <div key={item.key} className="dynamic">
            <div className="dynamic_name">{item.movieName}</div>
            <div className="dynamic_rating">{item.rating} / 5</div>
          </div>
        );
      })
    );
  };

  return (
    <div className="container">
      <div className="static">
        <h1 className="static_head">🎬 Good Movies 🍿</h1>
        <div className="static_subhead">
          Checkout my favourite movies. Select a genere to get started.
        </div>
        <div className="static_genre_navigate">
          {[
            { key: 1, text: "action", id: 1 },
            { key: 2, text: "comedy", id: 2 },
            { key: 3, text: "horror", id: 3 }
          ].map((item) => {
            return (
              <button key={item.key} onClick={() => actionHandler(item.id)}>
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
      <div className="dynamic_container">{currentGenre}</div>
    </div>
  );
};

export default App;
