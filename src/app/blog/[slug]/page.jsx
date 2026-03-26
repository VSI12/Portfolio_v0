import { notFound } from 'next/navigation';
import { getAllPosts, getPost } from '@/lib/posts';
import { serialize } from 'next-mdx-remote/serialize';
import PostPage from './PostPage';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} – Victor Iliya`,
    description: post.excerpt || '',
  };
}

export default async function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const mdxSource = await serialize(post.content);
  return <PostPage post={post} mdxSource={mdxSource} />;
}
