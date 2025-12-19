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
    return <div className="flex">
            {prodList}
    </div>
}

function ProductionCard({prod}){
    return <div className="flex flex-wrap gap-2 text-black h-[40vh] w-[500px]">
        <div className={styles.cardImage}>
            <div className={styles.cardTitle}>
                {prod.titre}
            </div>
        </div>
        <div className="bg-(--primary-color) h-1/2">

        </div>
    </div>
}