import Image from "next/image";

export default function ProjectCanvas(){
    return <div className={"flex"}>
        <ProjectCard />
    </div>
}

function ProjectCard(){
    return <div className={"flex-1/3 bg-amber-200 max-w-1/3"}>
        <Image src="/Placeholder.png" alt="Illustration du projet (placeholder)" width={300} height={300}/>
        <p>Ceci est un texte de base utiisé comme placeholder</p>
    </div>
}