'use client'

import styles from './portfolio.module.css';
import StarCanvas from "../../components/star.js";
import ProjectCanvas from "@/components/portfolio/projectCanvas";
import Planet1 from '@/components/background/Planet1.svg';
import Nebulae2 from '@/components/background/Nebulae2.svg'

export default function Page() {

    return (
        <main>
            <div className={styles.container}>
                <StarCanvas/>
                <Planet1 className={styles.planet}/>
                <Nebulae2 className={styles.nebuleuse}/>
            </div>

            <h1 className={styles.titre}>machin accroche qui<br/> mentionne absurde</h1>
            <ProjectCanvas />


        </main>
    )
}
