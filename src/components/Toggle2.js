import { useState } from 'react';

export function Toggle2(props) {
        
    const [showtext, setShowtext] = useState(false);
    

    return (
            <div>
            <button className="toggle1" onClick={() => {setShowtext(!showtext)}}>Toggle2</button>
            {showtext && <p>Raz jestem, raz mnie nie ma</p>}
            </div>
    )
}