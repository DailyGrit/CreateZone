<<<<<<< HEAD
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Createzone - 작지만 빛나는 창작을 위한 공간</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800">
  <!-- 상단 헤더 -->
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-indigo-600">Createzone</h1>
      <nav class="space-x-6 text-sm">
        <a href="#explore" class="hover:text-indigo-600">탐색하기</a>
        <a href="#post" class="hover:text-indigo-600">게시하기</a>
        <a href="#community" class="hover:text-indigo-600">커뮤니티</a>
        <a href="#profile" class="hover:text-indigo-600">내 정보</a>
      </nav>
=======
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 text-zinc-800 font-sans">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-700 tracking-tight">Createzone</h1>
          <nav className="space-x-6 text-base font-medium">
            <a href="#" className="text-zinc-700 hover:text-indigo-600 transition">탐색하기</a>
            <a href="#" className="text-zinc-700 hover:text-indigo-600 transition">게시하기</a>
            <a href="#" className="text-zinc-700 hover:text-indigo-600 transition">커뮤니티</a>
            <a href="#" className="text-zinc-700 hover:text-indigo-600 transition">내 정보</a>
          </nav>
        </div>
      </header>

      {/* 상단 배너 + 검색 + 카테고리 */}
      <section className="bg-white py-10 border-b border-zinc-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 space-y-6">
          {/* 검색창 */}
          <div className="text-center">
            <input
              type="text"
              placeholder="어떤 콘텐츠를 찾고 계신가요?"
              className="w-full max-w-xl px-5 py-3 rounded-lg border border-zinc-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* 카테고리 버튼 */}
          <div className="flex flex-wrap justify-center gap-4">
            {['게임', '웹툰', '디자인', '음악', '유튜브', '방송'].map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition shadow-md"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 광고 배너 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[100px] rounded-xl bg-white/60 backdrop-blur shadow-md flex items-center justify-center text-zinc-600 border border-zinc-100"
              >
                창작자 배너 광고 {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <main className="w-full max-w-[1600px] mx-auto px-4 py-16 flex gap-8">
        {/* 좌측 광고 */}
        <aside className="hidden lg:flex w-[220px] h-[600px] items-center justify-center bg-white/80 backdrop-blur rounded-xl shadow-inner text-center border border-zinc-200">
          <span className="text-zinc-500">광고 영역</span>
        </aside>

        {/* 메인 콘텐츠 */}
        <section className="flex-grow space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6">오늘의 인디 추천</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02] border border-zinc-100"
                >
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full mb-3">CATEGORY</span>
                  <h3 className="text-xl font-semibold mb-1">콘텐츠 제목</h3>
                  <p className="text-sm text-zinc-600">간단한 설명이 들어갑니다</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6">참여형 콘텐츠</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-100">
                <h3 className="text-lg font-semibold">이상형 월드컵: 내가 가장 원하는 게임 장르는?</h3>
                <button className="mt-3 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow">참여하기</button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-100">
                <h3 className="text-lg font-semibold">밸런스 게임: 플레이 타임 2시간 vs 그래픽 최고급</h3>
                <button className="mt-3 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow">참여하기</button>
              </div>
            </div>
          </div>
        </section>

        {/* 우측 광고 */}
        <aside className="hidden lg:flex w-[220px] h-[600px] items-center justify-center bg-white/80 backdrop-blur rounded-xl shadow-inner text-center border border-zinc-200">
          <span className="text-zinc-500">광고 영역</span>
        </aside>
      </main>

      {/* 푸터 */}
      <footer className="bg-zinc-50 border-t border-zinc-200 shadow-inner py-6 text-center text-sm text-zinc-500">
        &copy; 2025 Createzone. All rights reserved.
      </footer>
>>>>>>> 42ad7da (웹 개선)
    </div>
  </header>

  <!-- 메인 비주얼 섹션 -->
  <section class="bg-indigo-100 py-16">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-indigo-700 mb-4">작지만 빛나는 창작을 위한 공간</h2>
      <p class="text-lg text-indigo-600 mb-8">인디 창작자들이 자유롭게 작품을 올리고, 사용자들이 응원하며 함께 성장하는 플랫폼</p>
      <input type="text" placeholder="검색하기..." class="w-full md:w-1/2 px-4 py-3 rounded shadow border border-gray-300">
    </div>
  </section>

  <!-- 콘텐츠 영역 -->
  <main class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
    <!-- 좌측 광고 공간 -->
    <aside class="hidden lg:block col-span-1 bg-gray-200 h-[600px] rounded-lg shadow-inner text-center flex items-center justify-center">
      <span class="text-gray-500">광고 영역</span>
    </aside>

    <!-- 메인 콘텐츠 -->
    <section class="col-span-2 space-y-12">
      <div>
        <h2 class="text-2xl font-bold text-indigo-700 mb-4">오늘의 인디 추천</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg shadow">
            <span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mb-2">GAME</span>
            <h3 class="text-lg font-semibold">Pixel Adventure</h3>
            <p class="text-sm text-gray-600">간단한 설명이 들어갑니다</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mb-2">MUSIC</span>
            <h3 class="text-lg font-semibold">Lo-Fi Dreams</h3>
            <p class="text-sm text-gray-600">간단한 설명이 들어갑니다</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mb-2">APP</span>
            <h3 class="text-lg font-semibold">Mind Tracker</h3>
            <p class="text-sm text-gray-600">간단한 설명이 들어갑니다</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-indigo-700 mb-4">참여형 콘텐츠</h2>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-bold">이상형 월드컵: 내가 가장 원하는 게임 장르는?</h3>
            <button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">참여하기</button>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-bold">밸런스 게임: 플레이 타임 2시간 vs 그래픽 최고급</h3>
            <button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">참여하기</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 우측 광고 공간 -->
    <aside class="hidden lg:block col-span-1 bg-gray-200 h-[600px] rounded-lg shadow-inner text-center flex items-center justify-center">
      <span class="text-gray-500">광고 영역</span>
    </aside>
  </main>

  <!-- 푸터 -->
  <footer class="bg-white shadow-inner py-6 mt-12">
    <div class="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
      &copy; 2025 Createzone. All rights reserved.
    </div>
  </footer>
</body>
</html>
