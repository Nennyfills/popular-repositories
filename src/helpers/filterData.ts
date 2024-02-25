import { RepoType } from '@/types/repo';

/**
 * Filters an array of objects based on the given criteria.
 *
 * @param data - The array of objects to filter.
 * @param criteria - An array of criteria objects specifying the property and value to filter by.
 * @returns The filtered array of objects.
 */
const filterData = (
  data: RepoType[],
  criteria: { property: string; value: string }[]
): RepoType[] => {
  // Return an empty array if there's no data or criteria
  if (!data.length || !criteria.length) return [];

  return data.filter((item) => {
    // Check each criterion and include the item only if it meets all criteria
    return criteria.every(({ property, value }) => {
      const itemValue = item[property as keyof RepoType];
      if (typeof itemValue === 'string') {
        // Case-insensitive comparison for string values
        return itemValue.toLowerCase() === value.toLowerCase();
      } else if (typeof itemValue === 'boolean') {
        // Direct comparison for boolean values (e.g., true or false)
        return itemValue.toString() === value;
      }
      return false; // Exclude the item if the property does not exist or does not match the criteria
    });
  });
};

export default filterData;
