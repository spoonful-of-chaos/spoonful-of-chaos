import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { challengeRatingConfig } from '@/utils/configs';

const creaturesDirectory = path.join(process.cwd(), 'src/content/creatures');

export async function getCreatureData(fileName) {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(creaturesDirectory, fileName);

    // Use gray-matter to parse the Creature metadata section
    const matterResult = matter.read(fullPath);

    // Use remark to convert markdown
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content: contentHtml,
    };
}

export async function getSortedCreatureData() {
  // Get file names under /Creatures
  const fileNames = fs.readdirSync(creaturesDirectory);

  const allCreaturesData = await Promise.all(fileNames.map(async (fileName) => {
    return await getCreatureData(fileName)
  }));

  // Sort Creatures by date
  return allCreaturesData.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllCreatureIds() {
  const fileNames = fs.readdirSync(creaturesDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}
