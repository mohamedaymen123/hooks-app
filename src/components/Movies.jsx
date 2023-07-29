import React from 'react'
import Movie from './Movie';

const Movies =({ list, deleteFunction, handleEdit }) => {
    console.log(list);
    //   console.log(list);
    return (
      <div className="movie-list">
        {list.map((el, i) => (
          <Movie
            key={i}
            movie={el}
            deleteMethode={deleteFunction}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    );
  };
export default Movies