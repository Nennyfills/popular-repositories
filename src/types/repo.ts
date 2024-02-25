export interface RepoType {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  userHasStarred?: boolean;
  html_url: string;
  language: string | null;
}
