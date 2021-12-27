import { useState } from 'react';

export function Toggle(props) {
        
    const [display, setDisplay] = useState("display1");
    const [toggle, setToggle] = useState("toggle1");
    const [toggleSecond, setToggleSecond] = useState("toggle2");

    return (
            <div>
            <button className={ toggle } onClick={() => {setDisplay("display2"); setToggle("toggle2"); setToggleSecond("toggle1")}}>Toggle</button>
            <button className={ toggleSecond } onClick={() => {setDisplay("display1"); setToggle("toggle1"); setToggleSecond("toggle2")}}>Toggle</button>
            <p className={ display }>Raz jestem, raz mnie nie ma</p>
            </div>
    )
}