import WeatherCard from "./WeatherCard";
import dummyWeatherData from "../../../../mock/dummyWeatherData";

export default function WeatherDisplay({ city, weatherData }) {
  const { forecast } = dummyWeatherData;
  return (
    <div>
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
      <div className="mt-4 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7 bg-[#f0f4f8] ">
        {forecast.map((weatherData) => {
          return <WeatherCard key={weatherData.date} weatherData={weatherData} />;
        })}
      </div>
    </div>
  );
}
