import styles from './portfolio.module.css';
import StarCanvas from "../../components/star.js";
import ProductionsList from "@/components/production/productionsList";
import Planet1 from '@/components/vector/background/Planet1.svg';
import Nebulae2 from '@/components/vector/background/Nebulae2.svg';
import Link from "next/link";
import Image from "next/image";

export default function Page() {

    return (
        <main>
            <div className={styles.container}>
                <StarCanvas/>

                <Nebulae2 className={styles.nebuleuse}/>
            </div>

                <section className={styles.fullSection}>
                    <div className={styles.titre}>
                        <p className={styles.titreNom}>Rafaël Graff</p>
                        <h1>Créer du sens<br/> dans l&apos;<span className={styles.titreAbsurde}>absurde</span></h1>
                        <div className={styles.boutonsMenu}>
                            <p><a href={"#description"}><Arrow />Commencer l&#39;expédition<RevArrow /></a></p>
                            <p><a href={"#description"}><Arrow />Paramètres<RevArrow /></a></p>
                            <p><a href={"#description"}><Arrow />Quitter<RevArrow /></a></p>
                        </div>
                    </div>

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
                    <ProductionsList/>
                </section>
                <Link href="https://absurd.fr">Découvrir mon univers</Link>

        </main>
    );
}

function Arrow (){
    return <Image src={'Arrow.svg'} alt={'>'} width={20} height={20}/>
}

function RevArrow (){
    return <Image src={'Arrow.svg'} alt={'<'} width={20} height={20} style={{transform: 'scaleX(-1)'}}/>
}