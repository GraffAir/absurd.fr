import Image from "next/image";
import {getAllProductions} from "@/utils/productions";
import styles from "./productionsList.module.css";
export default function ProductionsList(){
    let prodList = [];
    getAllProductions().forEach((p) => prodList.push(
        <ProductionCard
            key={p.id}
            prod={p}
        />
    ));
    return <div className="flex gap-5">
            {prodList}
    </div>
}

function ProductionCard({prod}){
    let savoirsListe = [];
    prod.savoirs.forEach((s) => savoirsListe.push(
        <div key={s} className={styles.savoir}>{s}</div>
    ));
    return <div className={styles.outerContainer} style={{backgroundImage: 'url('+prod.cover+')'}}>
        <div className={styles.innerContainer}>
            <div className={styles.space} />
            <div className={styles.cardTitle}>
                <h3>{prod.titre}</h3>
            </div>
            <div className={styles.cardBody}>
                <p className="w-2/3">{prod.description}</p>
                <div className="flex gap-1 flex-wrap">
                    {savoirsListe}
                </div>
                <a href={'/productions/'+prod.id} className="button">En savoir plus</a>
            </div>
        </div>
    </div>
}