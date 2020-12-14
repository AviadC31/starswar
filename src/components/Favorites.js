import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'

export default function Favorites(props) {

    const [films, setFilms] = useState([])

    useEffect(() => {
            const films = props.data.films
            const favorites = films? films.filter(f => f.isFavorite) : JSON.parse(localStorage.getItem('films')).filter(f => f.isFavorite)

            setFilms(favorites)
    }, [])

    return (
        <div  className="container">
            {
            films.map(f => <MediaCard film={f}
                isFavorite={true}
                favoriteId={props.favoriteId}
            />)
            }
        </div>
    )
}