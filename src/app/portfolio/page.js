'use client'

import styles from './portfolio.module.css';
import StarCanvas from "../../components/star.js";
import ProjectCanvas from "@/components/portfolio/projectCanvas";
import Planet1 from '@/components/background/Planet1.svg';
import Nebulae2 from '@/components/background/Nebulae2.svg'
import Link from "next/link";

export default function Page() {

    return (
        <main>
            <div className={styles.container}>
                <StarCanvas/>
                <Planet1 className={styles.planet}/>
                <Nebulae2 className={styles.nebuleuse}/>
            </div>

            <section className={styles.fullSection}>
                <div className={styles.titre}>
                    <p>Rafaël Graff</p>
                    <h1>Créer du sens<br/> dans l&apos;absurde</h1>
                </div>

                <Link href="#description" className={styles.startButton}>Découvrir mon univers</Link>
            </section>
            <section id="description">
                <h2>Description</h2>
                <p>Bla bla du texte</p>
            </section>
            <section id= "productions">
                <h2>Productions</h2>
                <ProjectCanvas/>
            </section>
            <Link href="https://absurd.fr">Découvrir mon univers</Link>

        </main>
    );
}
