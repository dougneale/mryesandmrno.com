import config from "../../config.json";

type NavigationLink = {
  name: string
  url: string
}

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
  readonly navigation_links: NavigationLink[]
};

export default config as Config;
