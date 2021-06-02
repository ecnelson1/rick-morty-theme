import React from 'react'
import PropTypes from 'prop-types'

const Character = ({id, name, status, species, image}) => {
    return (
        <figure aria-label='character'>
            <img src={image} alt={name}/>
            <p>Nme: {name}</p>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
        </figure>
    )
}

Character.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Character


