export function getList() {
    return fetch('https://jsonplaceholder.typicode.com/albums/1/photos').
    then(data => data.json())
}
