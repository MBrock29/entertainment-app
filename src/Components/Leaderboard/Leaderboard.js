import React from 'react'
import s from "./Leaderboard.module.scss"

export default function Leaderboard({database}) {
    return (
        <div className={s.container}>
            {database.map((movie) => (
                <h2>{movie.name}{" "}number of likes: {movie.likes}</h2>
            ))}
        </div>
    )
}
