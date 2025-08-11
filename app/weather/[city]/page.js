import WeatherDisplay from "./components/WeatherDisplay";
export default async function WeatherPage({ params }) {
  const { city } = await params;

  const weatherData = await getWeatherData(city);

  return <WeatherDisplay weatherData={weatherData} city={city} />;
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
