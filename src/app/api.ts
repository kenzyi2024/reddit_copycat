export async function fetchSubredditPosts(subreddit: string) {
  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}/hot.json?limit=10`
  );
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.data.children.map((child: any) => ({
    id: child.data.id,
    title: child.data.title,
    author: child.data.author,
    score: child.data.score,
    num_comments: child.data.num_comments,
    url: child.data.url,
  }));
}
