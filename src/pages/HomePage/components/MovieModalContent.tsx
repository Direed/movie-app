import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

import styles from './MovieModalContent.module.css'
import {ICast, IMovie} from "../../../types";

type IProps = {
    movie: IMovie | null;
    handleClose: () => void;
}

const MovieModalContent: React.FC<IProps> = ({ movie, handleClose }) => {

    if(!movie) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.moviePlayer}>
                <iframe
                    id="ytplayer"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hvlP14cvNpI?autoplay=1&controls=0&mute=1&fs=0&iv_load_policy=3modestbranding=1"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay"
                />
                <AiFillCloseCircle
                    className={styles.closeIcon}
                    onClick={handleClose}
                />
            </div>
            <div className={styles.information}>
                <p className={styles.synopsis}>{movie.synopsis}</p>
                <div className={styles.additionalInfo}>
                    <p>Rating: <span>{movie.rating}</span></p>
                    <p>
                        Cast:
                        {movie.cast
                            .slice(0, movie.cast?.length > 3 ? 3 : movie.cast.length)
                            .map((cast: ICast, index: number) => (
                                <span key={`${cast.name}-${index}`}>
                                    {`${index === 0 ? ' ' : ', '}${cast.name}`}
                                </span>
                            ))}
                        <span>{movie.cast?.length > 3 ? ', more' : ''}</span>
                    </p>
                    <p>
                        Genres:
                        {movie.genre.map((ganreItem: string, index: number) => (
                            <span key={`${ganreItem}-${index}`}>
                                {`${index === 0 ? ' ' : ', '}${ganreItem}`}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieModalContent;