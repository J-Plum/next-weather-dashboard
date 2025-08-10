export default async function WeatherPage({ params }) {
  const city = params.city;

  return (
    <div className="text-center p-8">
      <h1 className="text-5xl font-bold mb-4">{city}</h1>
      <p className="text-xl text-gray-700">날씨 정보를 로딩 중입니다...</p>
    </div>
  );
}
