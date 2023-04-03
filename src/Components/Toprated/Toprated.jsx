import React, { useState } from 'react';
import "./Toprated.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const apiKey = "c04f2bf5a13ef7dcbbaf43b2989200a0";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const topRated = "top_rated";

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

const Toprated = () => {

  
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {

   

    const fetchTopRated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}&page=8`);
      setTopRatedMovies(results);


    };

    const getAllGenere = async () => {
      // https://api.themoviedb.org/3/genre/movie/list?api_key=c04f2bf5a13ef7dcbbaf43b2989200a0&language=en-US
      const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      console.log(genres);


    };

    getAllGenere();

    
    fetchTopRated();

  }, [])


  return (

    <section className='home'>

      <div className="banner1" >


       

      </div>

    
      <Row title={"Top Rated "} arr={topRatedMovies} />

      <div className="genreBox">

        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>{item.name}  </Link>
        ))}
      </div>



    </section>


  )
}

export default Toprated