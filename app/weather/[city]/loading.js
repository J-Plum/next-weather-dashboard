export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-xl text-gray-600">날씨 정보를 가져오는 중...</p>
      <div className="mt-4 h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
    </div>
  );
}
