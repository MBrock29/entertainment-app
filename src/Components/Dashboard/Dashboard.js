import React, {useState} from 'react'
import Leaderboard from '../Leaderboard/Leaderboard';
import s from  "./Dashboard.module.scss"

export default function Dashboard() {
    const [ database, setDatabase ] = useState([
        {
            id: 1,
            name: "Titanic",
            likes: 0
        },
        {
            id: 2,
            name: "Inception",
            likes: 0
        }
    ])
    const movieIndex = Math.floor(Math.random() * database.length);
    const currentMovie = database[movieIndex]

    const movieLiked = () => {

    }

    return (
        <div className={s.container}>
            <div className={s.card}>
                <h1>{currentMovie.name}</h1>
                <img className={s.cardImage} src={process.env.PUBLIC_URL + `/${database[movieIndex].name}.jpg`} alt="logo" />
                {console.log(movieIndex)}
            </div>
            <button className={s.buttonUp} onClick={() => movieLiked()}>Like</button> 
            <button className={s.buttonDown}>Dislike</button>
            <Leaderboard database={database} />
        </div>
    )
}
