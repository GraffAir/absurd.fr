import {getProductionFromId} from "@/utils/productions";
import styles from './production.module.css';

export default async function Page({params}){
    const { id } = await params;
    const prod = await getProductionFromId(id);
    return (<>
        <header className={styles.header}>

        </header>
        <main>
            <div className={styles.titleContainer}>
                <div className="flex justify-between">
                    <p>{prod.type}</p>
                    <p>{prod.statut}</p>
                </div>

                <h1>{prod.titre}</h1>
                <p className={styles.desc}>{prod.description}</p>
            </div>

            <div className={styles.prodContent} dangerouslySetInnerHTML={{__html: prod.contentHtml}} />
        </main>

    </>)
}