import { RepoType } from '@/types/repo';

/**
 * Toggles the `userHasStarred` status and adjusts the `stargazers_count` of a repository.
 * @param repoId - The ID of the repository to star/unstar.
 * @param data - An array of repositories.
 * @returns An updated array of repositories with the toggled `userHasStarred` status and adjusted `stargazers_count`.
 */
const starARepo = (repoId: string, data: RepoType[]) => {
  const updatedData = data.map((repo: RepoType) => {
    if (repo.id !== repoId) {
      // Return the repo as is if the ID doesn't match
      return repo;
    }

    // When the repo ID matches, toggle the `userHasStarred` status and adjust the `stargazers_count`
    const updatedRepo = {
      ...repo, // Spread to create a new object
      userHasStarred: !repo.userHasStarred, // Toggle the boolean value
      stargazers_count: repo.userHasStarred
        ? repo.stargazers_count - 1
        : repo.stargazers_count + 1,
    };

    return updatedRepo;
  });
  return updatedData;
};

export default starARepo;
