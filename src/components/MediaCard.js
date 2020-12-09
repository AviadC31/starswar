import React from 'react'
import Media from './Media'

export default function MediaCard (props) {

    return (
            <div>
                {
                    <Media film={props.film}
                        favoriteId={props.favoriteId} 
                        saveToLS={props.saveToLS}
                        removeFromLS={props.removeFromLS}
                        isHome={props.isHome}
                    />
                }
            </div>
    )
}


