import Image from "next/image";
import styles from './projectCard.module.css';

export default function ProjectCard() {
    return (
        <div className={styles.card}>
            <Image src="/Placeholder.png" alt="Illustration du projet (placeholder)" width={300} height={300}/>
            <p>Ceci est un texte de base utiisé comme placeholder</p>
        </div>
    )
}