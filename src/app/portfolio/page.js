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
                    <h1>Créer du sens<br/> dans l&apos;<span className={styles.titreAbsurde}>absurde</span></h1>
                </div>

                <Link href="#description" className={styles.startButton}>Découvrir mon univers</Link>
            </section>
            <section id="description">
                <div style={{marginTop:"200px"}}></div>
                <p className={styles.description}>
                    La liberté offerte par l’informatique m’a toujours passionné – des premiers jeux que j’ai développé sur Scratch jusqu’aux applications web avancées.
                    C’est l’art qui est arrivé ensuite; réussir à transmettre une émotion, comprendre l’expérience de l’utilisateur.
                    J’essaie de partager cette passion dans toutes mes créations. Alors, mettez votre ceinture, et bon voyage!</p>
            </section>
            <section id= "productions">
                <div style={{marginTop:"200px"}}></div>
                <h2>Productions</h2>
                <ProjectCanvas/>
            </section>
            <Link href="https://absurd.fr">Découvrir mon univers</Link>

        </main>
    );
}
