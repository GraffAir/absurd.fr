import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const productionsDirectory = path.join(process.cwd(), 'content/productions');

export function getContentFromFile(fileName){
    const fullPath = path.join(productionsDirectory, fileName);
    return fs.readFileSync(fullPath, 'utf8');
}

export async function getProductionFromId(id) {
    const fileContents = getContentFromFile(id + '.md');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

/**
@returns {Array} productions
 */
export function getAllProductions(){
    const fileNames = fs.readdirSync(productionsDirectory);
    return fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fileContents = getContentFromFile(fileName);
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data,
        };
    });
}


