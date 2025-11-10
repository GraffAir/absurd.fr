'use client'

import styles from './star.module.css';
import Image from 'next/image';
import {Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider, useParallax} from "react-scroll-parallax";

export function Star({ big, posX, posY, parallax, size = 20, className = '' }) {
    console.log(posX, posY);
    return (
            <ParallaxBannerLayer speed={parallax}>
                <Image
                    src={"/SmallStar.svg"}
                    alt=""
                    width={big ? size : size/2}
                    height={big ? size : size/2}
                    className={`${styles.star} ${className} ${Math.random() < 0.5 ? styles.starVariation1 : styles.starVariation2}`}
                    style={{left:`${posX}`, top:`${posY}`}}
                />
            </ParallaxBannerLayer>
    );
}

export default function StarCanvas(){
    let starList =  [];
    const sizeMultiplier = 3;
    for (let i = 0; i < 150; i++){
        let size = Math.random()*sizeMultiplier;
        let max_size = sizeMultiplier*0.5;
        starList.push(
            <Star
                big={size > max_size}
                size={size > sizeMultiplier*0.9 ? size*2 : size}
                posX={`${Math.random()*100}%`}
                posY={`${Math.random()*100}%`}
                parallax={Math.random()*size*20}
                key={i}
            />
        );
    }

    return <ParallaxProvider>
        <ParallaxBanner className={styles.parallaxBackground} style={{position:'absolute'}}>
            {starList}
        </ParallaxBanner>
    </ParallaxProvider>
}