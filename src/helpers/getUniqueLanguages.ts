import { RepoType } from '@/types/repo';

/**
 * Extracts unique languages from an array of repository objects, excluding null and empty string values.
 *
 * @param {RepoType[]} data - The array of repository objects to extract languages from.
 * @returns {string[]} An array of unique, non-empty language strings in lowercase.
 */
const getUniqueLanguages = (data: RepoType[]): string[] => {
  const languages = data.reduce((acc, item) => {
    const lang = item.language?.toLowerCase().trim();
    if (lang) acc.add(lang);
    return acc;
  }, new Set<string>());

  return Array.from(languages);
};

export default getUniqueLanguages;
