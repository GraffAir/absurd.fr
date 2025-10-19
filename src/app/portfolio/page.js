'use client'

import styles from './portfolio.module.css';
import Star from "../../components/star.js";
import {ParallaxBanner} from "react-scroll-parallax";

export default function Page() {
    let starList =  [];
    const sizeMultiplier = 10;
    for (let i = 0; i < 100; i++){
        let size = Math.random()*sizeMultiplier;
        let max_size = sizeMultiplier*0.5;
        starList.push(
            <Star
                big={size > max_size}
                size={size}
                posX={`${Math.random()*100}%`}
                posY={`${Math.random()*100}%`}
                parallax={Math.random()*size*20}
                key={i}
            />
        );
    }

    return (
        <div className={styles.container}>
                                                        <h1 className={styles.titre}>machin accroche qui mentionne absurde</h1>
            <div className={styles.mainFrame}></div>
            <ParallaxBanner className={styles.parallaxBackground} style={{position:'absolute'}}>
                {starList}
            </ParallaxBanner>


        </div>
    )
}
