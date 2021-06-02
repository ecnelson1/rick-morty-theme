import React from 'react';
import { useTheme } from '../../../state/ThemeProvider';
import ThemeControls from '../controls/ThemeControls';
import styles from '../app/App.css';

export const Header = () => {
    const theme = useTheme();

    return (
        <div className={`${
            theme === 'dark'
            ? styles.darkView
            : styles.standardView}`}>
            <ThemeControls/>
        </div>
    )
}
