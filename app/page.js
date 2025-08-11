"use client";

import WeatherSearch from "@/components/WeatherSearch";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">날씨 대시보드</h1>
      <p className="text-lg mb-8 text-gray-600">도시 이름을 입력하고 날씨를 확인하세요.</p>
      <WeatherSearch />
    </div>
  );
}
