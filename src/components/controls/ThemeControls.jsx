import React from 'react';
import { useHandleTheme } from '../../../state/ThemeProvider';


function ThemeControls() {
    const handleChange = useHandleTheme();
    return (
        <div>
            <p>Select theme for browsing experience below!</p>
            <select aria-label="themes" onChange={handleChange}>
                <option value="dark">Dark Mode</option>
                <option value="standard">Standard View</option>
            </select>
            
        </div>
    )
}

export default ThemeControls


