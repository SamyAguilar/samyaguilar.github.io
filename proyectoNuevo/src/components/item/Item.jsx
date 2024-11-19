import React, { useState } from 'react'; // Import useState
import './Item.css';

export default function Item({ isPlay: initialPlay }) { // Accept isPlay as a prop
    const [isPlay, setIsPlay] = useState(initialPlay); // Initialize state with prop

    function handleClick() {
        setIsPlay(!isPlay);
    }

    return (
        <section className="contenedor_item">
            <h2 className='text1'>play</h2>
            <h1 className='text2'>videogame</h1>
            <h1 className='text3'>Paseme por favor </h1>
            <a href='#' onClick={handleClick} className='btn'>
                {isPlay ? 'Jugar' : 'Jugando'}
            </a>
            <br>
            </br>
            <br></br>
            <br></br>

            <div className="imagen">
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofGrpeDQojbt65wBXRC7LsBY8nlH7sZil1Q&s' 
                    width={150} 
                    alt="Game" // Add alt attribute for accessibility
                />
            </div>
        </section>
    );
}