import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const productionsDirectory = path.join(process.cwd(), 'content/productions');

export function getProductionFromId(id){

}

/**
@returns {Array} productions
 */
export function getAllProductions(){
    const fileNames = fs.readdirSync(productionsDirectory);
    return fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(productionsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        //console.log(matterResult);
        return {
            id,
            ...matterResult.data,
        };
    });
}


