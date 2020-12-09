import React, { useState, useEffect } from 'react'
import favoriteIcon from '../icons/Favorite.png'
import unfavoriteIcon from '../icons/notFavorite.png'
import ep1 from '../icons/ep1.jpg'
import ep2 from '../icons/ep2.jpg'
import ep3 from '../icons/ep3.jpg'
import ep4 from '../icons/ep4.jpg'
import ep5 from '../icons/ep5.jpg'
import ep6 from '../icons/ep6.jpg'
const episodes_imgs = {ep1, ep2, ep3, ep4, ep5, ep6}

export default function Media(props) {

    const [isFavorite, setFavorite] = useState(false)
    const [isClicked, setClick] = useState(false)
    const [isSaved, setSaved] = useState(false)
        
    const favoriteFilm = () => {
        setSaved(true)
        setFavorite(true)
    }

    const saveToLS = () => {
        setFavorite(true)
        setSaved(!isSaved)
        setClick(!isClicked)
    }

    useEffect(() => {
        if (!isSaved && isFavorite){
            props.removeFromLS(props.film.id)
        }
        else if (isClicked){
            props.saveToLS(props.film.id)
        } 
    }, [isClicked])

    return (
        <div>
            {
                props.film.isFavorite && !isFavorite ? favoriteFilm() :
                <div className="box">
                    <div id="title"> {props.film? props.film.title :null} </div>
                    <img src={episodes_imgs['ep'+props.film.id]} />
                    <br/>
                    {props.isHome?
                    <img id="favoriteIcon" 
                         src={isSaved ? `${favoriteIcon}` : `${unfavoriteIcon}`} 
                         onClick={() => saveToLS()}
                    />
                        :
                    <img id="favoriteIconFavPage" src={favoriteIcon}/>
                    }
                    <div id="ex_favorite"> {
                                            props.film.isFavorite || isSaved?
                                            <div className="favorite">favorite</div>
                                            :props.film.wasFavoriteEver?
                                            <span>Film was your
                                                 <span className="favorite"> favorite </span>
                                                 once
                                            </span> 
                                            :'Click to save as favorite'
                                        }
                    </div> 
                </div>
            }
        </div>
    )
}

