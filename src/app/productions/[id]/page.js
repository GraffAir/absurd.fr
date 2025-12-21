import {getProductionFromId} from "@/utils/productions";

export default async function Page({params}){
    const { id } = await params;
    const prod = await getProductionFromId(id);
    return (<>
        <header>
            <h2>{prod.titre}</h2>
        </header>
        <main dangerouslySetInnerHTML={{__html: prod.contentHtml}} />
    </>)
}