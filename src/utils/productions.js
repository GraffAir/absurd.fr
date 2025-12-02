import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const productionsDirectory = path.join(process.cwd(), 'content/productions');

export function getProductionFromId(id){

}

export function getAllData(){
    const fileNames = fs.readdirSync(productionsDirectory);
    const allProdsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(productionsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        
        return {
            id,
            ...matterResult.data,
        };
    });
}

export function getAllIds(){
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((x) => x.replace(/\.md$/, ''));
}

export function getAllProductionsMetadata(){
    const allProductionsData = getFileNames(productionsDirectory)
}

