import { starARepo } from '..';
import { testData } from '@/test/data';

describe('starARepo', () => {
  it('should toggle the userHasStarred status and adjust the stargazers_count', () => {
    const repoId = '134';
    const updatedData = starARepo(repoId, [testData[4]]);
    expect(updatedData).toEqual([
      {
        id: '134',
        name: 'John',
        description: 'hey you',
        html_url: 'http//:egg',
        stargazers_count: 2,
        language: 'js',
        userHasStarred: true,
      },
    ]);
  });

  it('should not modify the data if the repo ID does not match', () => {
    const repoId = '99';
    const updatedData = starARepo(repoId, testData);

    expect(updatedData).toEqual(testData);
  });
});
