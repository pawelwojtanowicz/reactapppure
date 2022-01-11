import React, {useState, useEffect} from "react";
import axios from "axios";


function DataFetching() {
    const [albums, setAlbums] = useState ([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => {
            console.log(res)
            setAlbums(res.data)
        })
        .catch(er => {
            console.log()
            
            
        })
    }, [])
    return (
        <div>
            <ul>
                {
                    albums.map(album => <li key={albums.id}>{albums.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching;
