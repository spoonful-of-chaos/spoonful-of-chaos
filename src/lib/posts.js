import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);

    // Use gray-matter to parse the post metadata section
    const matterResult = matter.read(fullPath);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}