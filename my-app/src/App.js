import React from "react";
import SearchIcon from './Search.svg'
import {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import './App.css'


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4991a95b'



const App = () => {
    const [movies,setMovies]=useState([])
    const [searchByName,setsearchByName]=useState('')
    
    
    const getMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        setMovies(data.Search)
    }
    
    useEffect(() => {
        getMovies('Prime')
    }, [])
    
    return (
        <div className="app">
        
        <h1>MovieLand</h1>
        
        <div className="search">
        <input
        type='search'
        onChange={(e)=> setsearchByName(e.target.value)}
        value={searchByName}
        />
        
        <img
        src={SearchIcon}
        alt='Search'
        onClick={()=>getMovies(searchByName)}
        />
        </div>
        
        
        
        
        <div className="container">

        {movies.length > 0 ? 
            (movies.map((eachItem)=>(
                <MovieCard movieItemDetails = {eachItem} key={eachItem.imdbID}/>
                ))):(
                    <div className="empty">
                    <h1>No Movies Found</h1>
                    </div>)}
                    </div>
                    
                    </div>
                    );
                    
                }
                
                export default App;
