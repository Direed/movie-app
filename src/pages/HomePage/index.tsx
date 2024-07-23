import React, {useState} from 'react'
import ContentLayout from '../../components/layouts/ContentLayout'
import MovieBanner from "../../components/MovieBanner";
import Slider from "../../components/Slider";
import {mockData} from "../../constants/mockData";
import MovieCard from "../../components/MovieCard";
import Modal from "../../components/Modal";
import MovieModalContent from "./components/MovieModalContent";
import {IMovie} from "../../types";

const HomePage = () => {
    const [isOpenMovieModal, setIsOpenMovieModal] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

    const handleSelectMovie = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, movie: IMovie) => {
        e.preventDefault()
        e.stopPropagation()
        setSelectedMovie(movie)
        setIsOpenMovieModal(true)
    }

    return (
        <ContentLayout>
            <MovieBanner />
            <Slider title={'Top 10 recent movies'}>
                {mockData.map((movie, index) => (
                    <Slider.Slide key={`${movie}-${index}`}>
                        <MovieCard
                            movie={movie}
                            handleOpen={handleSelectMovie}
                        />
                    </Slider.Slide>
                ))}
            </Slider>
            <Slider title={'Top 10 popular in your country'}>
                {mockData.map((movie, index) => (
                    <Slider.Slide key={`${movie}-${index}`}>
                        <MovieCard
                            movie={movie}
                            handleOpen={handleSelectMovie}
                        />
                    </Slider.Slide>
                ))}
            </Slider>
            <Modal
                open={isOpenMovieModal}
                handleClose={() => setIsOpenMovieModal(false)}
            >
                <MovieModalContent
                    movie={selectedMovie}
                    handleClose={() => setIsOpenMovieModal(false)}
                />
            </Modal>
        </ContentLayout>
    )
}

export default HomePage
