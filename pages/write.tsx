import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from('posts').insert([
      { title, summary, content }
    ]);

    if (!error) {
      alert('게시글이 등록되었습니다!');
      router.push('/');
    } else {
      alert('오류 발생: ' + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-indigo-700">글쓰기</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="요약"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          placeholder="내용을 입력하세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-3 py-2 rounded h-40"
          required
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          등록하기
        </button>
      </form>
    </div>
  );
}
