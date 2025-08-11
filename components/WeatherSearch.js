"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      router.push(`/weather/${city}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="도시 이름을 영어로 입력하세요"
        className="p-3 border rounded-lg shadow-sm w-80 text-center text-lg"
      />
      <button
        type="submit"
        className="mt-4 p-3 mb-10 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        날씨 검색
      </button>
    </form>
  );
}
