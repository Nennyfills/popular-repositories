import { testData } from '@/test/data';
import { filterData } from '..';

describe('filterData', () => {
  const starredCriteria = { property: 'userHasStarred', value: 'true' };
  const languageCriteria = {
    property: 'language',
    value: 'java',
  };

  it('should filter data based on criteria', () => {
    const result = filterData(testData, [starredCriteria, languageCriteria]);
    expect(result).toEqual([testData[1]]);
  });

  it('should return an empty array if there is no data', () => {
    const criteria = [{ property: 'active', value: 'true' }];
    const result = filterData([], criteria);
    expect(result).toEqual([]);
  });

  it('should return an empty array if there are no criteria', () => {
    const result = filterData(testData, []);
    expect(result).toEqual([]);
  });

  it('should perform case-insensitive comparison for string values', () => {
    const result = filterData(testData, [
      { property: 'language', value: 'Java' },
    ]);
    expect(result).toEqual([testData[1]]);
  });

  it('should perform direct comparison for boolean values', () => {
    const criteria = [{ property: 'active', value: 'PHP' }];
    const result = filterData(testData, criteria);
    expect(result).toEqual([]);
  });
});
