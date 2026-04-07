import axios from 'axios'

export const Card = () => {

    axios.get('https://rickandmortyapi.com/api/character')  
    .then(res => console.log(res.data.results))
    .catch(err => console.log(err))
    


    return (
        <p></p>
    )
}