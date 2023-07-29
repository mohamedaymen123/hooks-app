import { useState } from "react";
import "./App.css";
import { moviesData } from "./data";
import AddNewMovie from "./components/AddNewMovie";
import Surch from "./components/Surch";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieList from "./components/MovieList"
import Info from "./components/Info";



function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterText, setFilterText] = useState("gu");
  const [filterRating, setFilterRating] = useState(1);
  const handleTextFiler = (x) => setFilterText(x);
  const handleRatingFilter = (y) => setFilterRating(y);
  // console.log(movies);
  // deletefunction
  const handleDelete = (theId) =>
    setMovies(movies.filter((el) => el.id !== theId));
  // add new movie
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  // edit movie
  const handleEdit = (editedMovie) =>
    setMovies(
      movies.map((el) =>
        el.id === editedMovie.id ? { ...el, ...editedMovie } : el
      )
    );
  return (
    <div className="App">
    <Router>
<Routes>
<Route  path="/" element={
  <>
 <Surch
        filterText={filterText}
        filterRating={filterRating}
        handleTextFiler={handleTextFiler}
        handleRatingFilter={handleRatingFilter}
      />
      <MovieList
        list={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(filterText.toLowerCase()) &&
            el.rating >= filterRating
        )}
        deleteFunction={handleDelete}
        handleEdit={handleEdit}
      />
      <AddNewMovie handleAdd={handleAdd} />
  </>
} />
<Route path="/info/:name"  element={<Info movies={movies} />} />

     
</Routes>
    </Router>

    </div>
  );
}

export default App;