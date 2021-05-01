import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Hamburger from './components/Hamburger'
import Favorites from './components/Favorites'
import Camera from './components/Camera'
import './App.css';
import icon from './icons/icon.png'

export default function App() {

  const [data, setData] = useState({})

const saveToLS = (id) => {
    const films = JSON.parse(localStorage.getItem('films'))
    films[id-1].isFavorite = true
    films[id-1].wasFavoriteEver = true
    setData({ films })
    localStorage.setItem('films', JSON.stringify(films))
}

const removeFromLS = (id) => {
    const films = JSON.parse(localStorage.getItem('films'))
    films[id-1].isFavorite = false
    setData({ films })
    localStorage.setItem('films', JSON.stringify(films))
}

useEffect(() => {
    async function fetchMyAPI() {
        var films = []
        let data = await axios.get('https://swapi.dev/api/films/')
        films = data.data.results.map(r=>{
            return{
                id: r.episode_id,
                title: r.title,
                isFavorite: false,
                wasFavoriteEver: false
            }
            })
            films.sort(function(a,b){ 
            if(a.id === 0) return 1;
            else if(b.id === 0) return -1;
            else return a.id - b.id;
        });
            if (localStorage.getItem('films') === null) {
            localStorage.setItem('films', JSON.stringify(films))
        }
        films = JSON.parse(localStorage.getItem('films'))
        setData({ films })
    }
    fetchMyAPI()
    },[])

  return (
    <Router>
        <div id="header">
          <a href='/'>
            <img id="icon" src={icon} />
          </a>
        </div>                                      
      <Hamburger />
      <Route path="/" exact render={() => <Home data={data} saveToLS={saveToLS} removeFromLS={removeFromLS} />} />
      <Route path="/favorites" exact render={() => <Favorites data={data} />} />
      <Route path="/camera" exact render={() => <Camera />} />
    </Router>
  )
}


