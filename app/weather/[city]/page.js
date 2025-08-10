export default async function WeatherPage({ params }) {
  const { city } = await params;

  const weatherData = await getWeatherData(city);

  return (
    <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-5xl font-bold mb-4 capitalize">{city}</h1>
      <p className="text-8xl font-thin mb-2">{Math.round(weatherData.main.temp)}°C</p>
      <p className="text-2xl mb-2">{weatherData.weather[0].description}</p>
      <div className="flex justify-around w-full mt-4 text-gray-600">
        <div className="flex flex-col items-center">
          <p className="font-bold">최고 기온</p>
          <p>{Math.round(weatherData.main.temp_max)}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">최저 기온</p>
          <p>{Math.round(weatherData.main.temp_min)}°C</p>
        </div>
      </div>
    </div>
  );
}

async function getWeatherData(city) {
  const apiKey = process.env.WEATHER_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}
