import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();
      if (!error) setPost(data);
    };

    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', id)
        .order('created_at', { ascending: true });
      if (!error) setComments(data);
    };

    fetchPost();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    const { error } = await supabase.from('comments').insert([
      {
        post_id: id,
        content: newComment,
        user_id: user.id
      }
    ]);

    if (!error) {
      setNewComment('');
      const { data } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', id)
        .order('created_at', { ascending: true });
      setComments(data || []);
    }
  };

  if (!post) return <p className="p-6 text-gray-600">불러오는 중...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-8">
      <h1 className="text-2xl font-bold text-indigo-700">{post.title}</h1>
      <p className="text-sm text-gray-500 mt-1">{post.summary}</p>
      <div className="mt-6 text-gray-800 whitespace-pre-line">{post.content}</div>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-lg font-bold mb-4">댓글</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            <p className="text-sm text-gray-700 whitespace-pre-line">{comment.content}</p>
            <p className="text-xs text-gray-400">{new Date(comment.created_at).toLocaleString()}</p>
          </div>
        ))}

        {user ? (
          <form onSubmit={handleCommentSubmit} className="mt-4 space-y-2">
            <textarea
              className="w-full border px-3 py-2 rounded"
              placeholder="댓글을 입력하세요..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              등록
            </button>
          </form>
        ) : (
          <p className="text-sm text-gray-500 mt-4">로그인 후 댓글을 작성할 수 있습니다.</p>
        )}
      </div>
    </div>
  );
}
