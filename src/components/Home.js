import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import '../App.css'

export default function Home (props) {

return (
        <div className="container">
            {
            props.data.films?
             props.data.films.map(f => <MediaCard key={f.id}
                                            film={f}
                                            isHome={true}
                                            saveToLS={props.saveToLS}
                                            removeFromLS={props.removeFromLS}/>)
             :null
            }
        </div>
    )
}


