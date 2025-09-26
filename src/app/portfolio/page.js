'use client'

import styles from './portfolio.module.css';
import Star from "../../components/star.js";
import {ParallaxBanner} from "react-scroll-parallax";

export default function Page() {
    let starList =  [];
    const sizeMultiplier = 20;
    for (let i = 0; i < 200; i++){
        let size = Math.random()*sizeMultiplier;
        let max_size = sizeMultiplier*0.5;
        starList.push(
            <Star
                big={size > max_size}
                size={size}
                posX={`${Math.random()*100}%`}
                posY={`${Math.random()*100}%`}
                parallax={Math.random()*size*10}
                key={i}
            />
        );
    }

    return (
        <>
            <h1 className={styles.titre} style={{position:'absolute', top:10}}>Portfolio</h1>
            <ParallaxBanner className={styles.parallaxBackground}>
                {starList}
            </ParallaxBanner>

        </>
    )
}
