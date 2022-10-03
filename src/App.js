import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movie, setmovie] = useState({});

  const handleChange = (event) => {
    setsearchQuery(event.target.value);
  };

  const getMovie = async (event) => {
    const API = ` http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchQuery}`;
    console.log(API);
    const res = await axios.get(API);
    setmovie(res.data);
  };

  return (
    <div className="App">
      <input name={searchQuery} onChange={handleChange} />
      <p>{searchQuery}</p>
      <button onClick={getMovie}>Explore</button>
      <img src={movie.Poster} alt={movie.Titles} />
    </div>
  );
}

export default App;
