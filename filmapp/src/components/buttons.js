import React, {useState} from 'react'

const Buttons = () => {
    const [colour, setColour] = useState('pink');
    const handleClick = (selectedColour) => {
        setColour(selectedColour);
    }
    return (
        <>
        <div style= {{
            padding: '50px',
            textAlign: 'center',
            backgroundColor: colour
        }}
        >
            {/*  can either assign onClick to a function (handleClick) or use inline javascript - here we are calling the setColour function */}
        <button onClick={() => setColour('red')}>Red</button>
        <button onClick={() => handleClick('green')}>Green</button>
         <button onClick={() => handleClick('blue')}>Blue</button>

         { colour && <p>You chose {colour}</p>}
         </div>
        </>
    )
}

export default Buttons;