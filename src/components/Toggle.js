import { useState } from 'react';

export function Toggle(props) {
        
    const [display, setDisplay] = useState("display1");
    const [toggle, setToggle] = useState("toggle1");

    return (
            <div>
            <button className="toggle1" onClick={() => {setDisplay("display2")}}>Toggle</button>

            <p className={ display }>Raz jestem, raz mnie nie ma</p>
            </div>
    )
}