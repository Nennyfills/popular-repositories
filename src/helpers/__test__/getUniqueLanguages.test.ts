import { getUniqueLanguages } from '..';
import { testData } from '@/test/data';

describe('getUniqueLanguages', () => {
  it('should return an array of unique lowercase and trimmed languages', () => {
    const result = getUniqueLanguages([testData[1], testData[2]]);
    expect(result).toEqual(['java', 'js']);
  });

  it('should return an empty array if there are no languages', () => {
    const data = [
      {
        id: '12',
        name: 'Jane',
        userHasStarred: false,
        description: 'hey you',
        html_url: 'http//:pet',
        stargazers_count: 1,
        language: null,
      },
    ];
    const result = getUniqueLanguages(data);

    expect(result).toEqual([]);
  });
});
