import features from '$lib/data/features';
import { filteredPosts } from '$lib/data/blog-posts';

export async function load() {
  // get the latest 2 blog posts
  const posts = filteredPosts.slice(0, 2);

  return {
    features,
    posts
  };
}
