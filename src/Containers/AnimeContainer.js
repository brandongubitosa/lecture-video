import React from 'react'
import Instructor from '../Components/Instructor'

function AnimeContainer(props) {
 

    return (
        <>
            <h1>Anime Container</h1>
            <h3><Instructor instructor={props.instructor}/></h3>
        </>
    )
}

export default AnimeContainer