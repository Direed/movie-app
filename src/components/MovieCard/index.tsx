import React, {useRef, useState} from 'react'
import { AiFillDownCircle } from "react-icons/ai";
import {useOnClickOutside} from "usehooks-ts";

import styles from './MovieCard.module.css'
import {IMovie} from "../../types";

type IProps = {
    movie: IMovie;
    handleOpen: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, movie: IMovie) => void;
}

const MovieCard: React.FC<IProps> = ({movie, handleOpen}) => {
    const previewRef = useRef(null)
    const [isOpenPreview, setIsOpenPreview] = useState<boolean>(false)

    // @ts-ignore
    useOnClickOutside(previewRef, () => setIsOpenPreview(false), "mousemove")

    return (
        <div className={styles.overlay}>
            <div
                className={styles.container}
                onClick={(e) => handleOpen(e, movie)}
                onMouseOver={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsOpenPreview(true)
                }}
            >
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${movie.thumbnail_vertical})`,
                    }}
                />
                <p className={styles.title}>{movie.title}</p>
            </div>
            {isOpenPreview && (
                <div
                    ref={previewRef}
                    className={styles.preview}
                    onClick={(e) => handleOpen(e, movie)}
                >
                    <iframe
                        id="ytplayer"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/hvlP14cvNpI?autoplay=1&controls=0&mute=1&fs=0&iv_load_policy=3modestbranding=1"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay"
                    />
                    <div className={styles.additionalInfo}>
                        <p className={styles.title}>{movie.title}</p>
                        <AiFillDownCircle />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieCard;