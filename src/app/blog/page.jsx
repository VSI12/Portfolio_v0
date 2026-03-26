import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import BlogIndex from './BlogIndex';

export const metadata = {
  title: 'Writing – Victor Iliya',
  description: 'Thoughts on cloud infrastructure, DevOps, and engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogIndex posts={posts} />;
}
