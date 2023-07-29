import React from 'react'
import { useParams } from 'react-router-dom'

const Info = ({movies}) => {
    const {name}=useParams()
    const movie=movies.find(el=>el.name===name)
    
    
  return (
    <div>
    <img src={movie.image} alt="" />
    <iframe  src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p> Description: <br /> {movie.Desc}</p>
    </div>
  )
}

export default Info;