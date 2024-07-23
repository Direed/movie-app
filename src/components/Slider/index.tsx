import React, {
    Children,
    cloneElement, createContext, ReactNode, useEffect, useMemo, useRef, useState,
} from 'react'
import styles from './Slider.module.css'
// @ts-ignore
import {SwiperEvents} from "swiper/types";

import { register } from 'swiper/element/bundle';

type IPropsSlide = {
    children: ReactNode;
    value?: string | null;
}

type IProps = {
    children: ReactNode;
    defaultValue?: string | null;
    title: string;
}

register();

const ToggleContext = createContext({})

const Slider = ({ children, defaultValue, title, ...restProps }: IProps) => {
    const swiperElRef = useRef<any>(null);
    const [showNavigation, setShowNavigation] = useState(defaultValue || null)
    const [currentSlide, setCurrentSlide] = useState(0);
    const [vw, setVw] = useState(0);
    const itemsOnScreen = useMemo(() => Math.trunc((vw - 210) / 330), [vw]);

    useEffect(() => {
        const handleResize = () => {
            setVw(window.innerWidth);
        };

        setVw(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        swiperElRef.current.addEventListener('swiperslidechange', (e: SwiperEvents) => {
            const [swiper] = e.detail;
            setCurrentSlide(swiper.activeIndex)
        });
    }, []);

    return (
        <div
            className={styles.container}
            onMouseOver={() => setShowNavigation('true')}
            onMouseOut={() => setShowNavigation(null)}
        >
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.pagination}>
                    {Array.from({length: (Children.map(children, (child) => child)?.length as number - (itemsOnScreen - 1))}).map((_, index) => (
                        <div
                            key={`${index}`}
                            className={styles.paginationItem}
                            style={{ backgroundColor: currentSlide === index ? 'red' : 'white'}}
                        />
                    ))}
                </div>
            </div>
            {/*// @ts-ignore*/}
            <swiper-container
                ref={swiperElRef}
                navigation={"true"}
                space-between="30"
                pagination={null}
                slides-per-view="auto"
                {...restProps}
            >
                <ToggleContext.Provider value={{ showNavigation, setShowNavigation }}>
                    {children}
                </ToggleContext.Provider>
                {/*// @ts-ignore*/}
            </swiper-container>
        </div>

    )
}

Slider.Slide = function SlideItem({ children, value, ...restProps }: IPropsSlide) {
    return (
        // @ts-ignore
        <swiper-slide className={styles.slide} {...restProps}>{Children.map(children, (child) => cloneElement(child, { value }))}</swiper-slide>
    )
}

export default Slider
