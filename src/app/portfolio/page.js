'use client'

import styles from './portfolio.module.css';
import StarCanvas from "../../components/star.js";

export default function Page() {

    return (
        <main className={styles.container}>
            <h1 className={styles.titre}>machin accroche qui<br/> mentionne absurde</h1>
            <div className={styles.mainFrame}></div>
        <StarCanvas />
        </main>
    )
}
