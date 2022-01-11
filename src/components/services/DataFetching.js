import React, {useState, useEffect} from "react";
import axios from "axios";


function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
            
            
        })
    }, [])
    return (
        
        <div>
            <ul>
                {
                    posts.map(post => (
                    <li key={post.id}>{post.title}{post.thumbnail}</li>
                    ))}
            </ul>
        </div>
    )
}

export default DataFetching;
