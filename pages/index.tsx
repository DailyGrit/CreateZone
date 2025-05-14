import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
      setPosts(data || []);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">Createzone 커뮤니티</h1>
      <Link href="/write" className="text-sm text-white bg-indigo-600 px-4 py-2 rounded">글쓰기</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {posts.map(post => (
          <Link href={`/post/${post.id}`} key={post.id} className="bg-white shadow p-4 rounded hover:shadow-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
