import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";


export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.estReadingTime = readingTime.minutes;
  };
}


export const checkImageUrl = (image, url) => {
  try {
    new URL(image);
    return image;
  } catch (error) {
    return new URL(image, url).toString();
  }
};

// 获取当前文章的序号
export const getIndex = (currentPage) => {
  const oldTitle = decodeURIComponent(currentPage.split('/post/')[1]);
  return parseInt(oldTitle.split('-')[0])
}