import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'
import styles from '../app/App.css'
import { useTheme } from '../../../state/ThemeProvider'

function CharacterList({characters}) {
    const theme = useTheme
    return (
    <div  className={`${
        theme === 'dark'
        ? styles.darkView
        : styles.standardView}`}>
        <ul aria-label='character-list'>
            {characters.map((character)=> (
                <li key={character.id}>
                    <Character
                    id={character.id} 
                    name={character.name} 
                    status={character.status} 
                    species={character.species} 
                    image={character.image}
                    />
                </li>
            ))}
        </ul>
    </div>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            name: PropTypes.string.isRequired, 
            status: PropTypes.string.isRequired, 
            species: PropTypes.string.isRequired, 
            image: PropTypes.string.isRequired,
        })
    )
}

export default CharacterList



