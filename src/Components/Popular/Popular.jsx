import React, { useState } from 'react';
import "./Popular.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const apiKey = "c04f2bf5a13ef7dcbbaf43b2989200a0";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const popular = "popular";

const Card = ({ img }) => (
  <img className="card" src={img} alt="cover" />
)

const Row = ({ title, arr = [
],
}) => (

  <div className='row'>
    <h2> {title} </h2>

    <div>

      {
        arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />


        ))
      }

    </div>




  </div>
)

const Popular = () => {

  
  const [popularMovies, setPopularMovies] = useState([]);
 
  const [genre, setGenre] = useState([]);

  useEffect(() => {

  

    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&page=4`);
      setPopularMovies(results);

    };

  
    const getAllGenere = async () => {
      // https://api.themoviedb.org/3/genre/movie/list?api_key=c04f2bf5a13ef7dcbbaf43b2989200a0&language=en-US
      const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      console.log(genres);


    };

    getAllGenere();

   
    fetchPopular();
 

  }, [])


  return (

    <section className='home'>

      <div className="banner1">


        

      </div>

     
      <Row title={"Popular "} arr={popularMovies} />
      

      <div className="genreBox">

        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>{item.name}  </Link>
        ))}
      </div>



    </section>


  )
}

export default Popular