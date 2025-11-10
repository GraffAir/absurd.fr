'use client'

import styles from './portfolio.module.css';
import StarCanvas from "../../components/star.js";
import ProjectCanvas from "@/components/portfolio/projectCanvas";
import Planet1 from '@/components/Planet1.svg';

export default function Page() {

    return (
        <main className={styles.container}>
            <h1 className={styles.titre}>machin accroche qui<br/> mentionne absurde</h1>
            <ProjectCanvas />


        <Planet1 className={styles.planet}/>
        <StarCanvas />
        </main>
    )
}
