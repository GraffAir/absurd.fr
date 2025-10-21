'use client'

import styles from './star.module.css';
import Image from 'next/image';
import {Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax} from "react-scroll-parallax";

export default function Star({ big, posX, posY, parallax, size = 20, className = '' }) {
    console.log(posX, posY);
    return (

            <ParallaxBannerLayer speed={parallax}>
                <Image
                    src={big ? "/BigStar.svg" : "/SmallStar.svg"}
                    alt=""
                    width={big ? size : size/2}
                    height={big ? size : size/2}
                    className={`${styles.star} ${className}`}
                    style={{left:`${posX}`, top:`${posY}`}}
                />
            </ParallaxBannerLayer>


    );
}