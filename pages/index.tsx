import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 text-zinc-800 font-sans">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-indigo-700">Createzone</h1>
          <nav className="space-x-6 text-base font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-700 transition">탐색하기</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 transition">게시하기</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 transition">커뮤니티</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 transition">내 정보</a>
          </nav>
        </div>
      </header>

      {/* 배너/슬라이드 (유저 콘텐츠 영역) */}
      <section className="bg-indigo-100 py-12">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
                <img src={`https://source.unsplash.com/random/600x400?sig=${i}`} alt="Banner" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-zinc-800">창작자 배너 #{i + 1}</h3>
                  <p className="text-sm text-zinc-500 mt-1">창작자가 등록한 콘텐츠 홍보 배너입니다.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 검색 */}
      <section className="py-4 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <input
            type="text"
            placeholder="검색하기..."
            className="w-full md:w-1/2 px-4 py-3 rounded shadow border border-gray-300 focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </section>

      {/* 카테고리 */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-wrap justify-center gap-4">
          {["게임", "웹툰", "디자인", "음악", "유튜브", "방송"].map((category, i) => (
            <button
              key={i}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm hover:bg-indigo-200 transition"
            >
              #{category}
            </button>
          ))}
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <main className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 좌측 광고 */}
        <aside className="hidden lg:block col-span-1 bg-gray-200 h-[600px] rounded-lg shadow-inner text-center flex items-center justify-center">
          <span className="text-gray-500">광고 영역</span>
        </aside>

        {/* 중앙 콘텐츠 */}
        <section className="col-span-1 lg:col-span-2 space-y-12">
          {/* 오늘의 인디 추천 */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">오늘의 인디 추천</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mb-2">CATEGORY</span>
                  <h3 className="text-lg font-semibold">콘텐츠 제목</h3>
                  <p className="text-sm text-gray-600">간단한 설명이 들어갑니다</p>
                </div>
              ))}
            </div>
          </div>

          {/* 참여형 콘텐츠 */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">참여형 콘텐츠</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">이상형 월드컵: 내가 가장 원하는 게임 장르는?</h3>
                <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">참여하기</button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">밸런스 게임: 플레이 타임 2시간 vs 그래픽 최고급</h3>
                <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">참여하기</button>
              </div>
            </div>
          </div>
        </section>

        {/* 우측 광고 */}
        <aside className="hidden lg:block col-span-1 bg-gray-200 h-[600px] rounded-lg shadow-inner text-center flex items-center justify-center">
          <span className="text-gray-500">광고 영역</span>
        </aside>
      </main>

      {/* 푸터 */}
      <footer className="bg-white shadow-inner py-6 mt-12 text-center text-sm text-gray-500">
        &copy; 2025 Createzone. All rights reserved.
      </footer>
    </div>
  );
}
