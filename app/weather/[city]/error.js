"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h2 className="text-2xl font-bold text-red-500 mb-2">문제가 발생했습니다!</h2>
      <p className="text-gray-600 mb-4">날씨 정보를 가져오는 데 실패했습니다.</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        다시 시도
      </button>
    </div>
  );
}
