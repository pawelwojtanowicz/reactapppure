import React, {useState, useEffect} from "react";
import axios from "axios";


function DataFetching() {
    const [albums, setAlbums] = useState ([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => {
            console.log(res)
        })
        .catch(er => {
            console.log()
            
            
        })
    })
    return (
        <div>
            <ul>
                {
                    albums.map(post => <li key={albums.id}>{albums.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching;
