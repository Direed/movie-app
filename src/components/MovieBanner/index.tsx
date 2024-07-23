import React from 'react';
import { IMovie } from '../../types';

import styles from './MovieBanner.module.css'

type IProps = {
    suggestedMovie?: IMovie
}

const MovieBanner: React.FC<IProps> = ({suggestedMovie}) => {
    return (
        <div className={styles.container}>
            <iframe
                id="ytplayer"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hvlP14cvNpI?autoplay=1&controls=0&mute=1&fs=0&iv_load_policy=3modestbranding=1"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
            />
        </div>
    )
}

export default MovieBanner