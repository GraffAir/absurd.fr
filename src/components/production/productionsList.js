import Image from "next/image";
import {getAllProductions} from "@/utils/productions";

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
    return <div className={"flex-1/3 bg-amber-200 max-w-1/3"}>
        <Image src="/Placeholder.png" alt="Illustration du projet (placeholder)" width={300} height={300}/>
        <h3>{prod.titre}</h3>
        <p>{prod.description}</p>
    </div>
}