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
