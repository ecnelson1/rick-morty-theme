import React from 'react';
import { useTheme } from '../../state/ThemeProvider';
import CharacterList from '../components/characters/CharacterList';
import {useCharacters} from '../hooks/characters-hook';

const ListContainer = () => {
    const [loading, characters] = useCharacters();
    const theme = useTheme();
    return (
        <div>
            {loading ? (<h1>LOADING...</h1>)
            : (<CharacterList characters = {characters}/>)}
        </div>
    );
};
export default ListContainer
