import WeatherCard from "./WeatherCard";
import dummyWeatherData from "../../../../mock/dummyWeatherData";

export default function WeatherDisplay({ city, weatherData }) {
  const { forecast } = dummyWeatherData;
  return (
    <div>
      <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl">
        <div className="text-5xl font-bold mb-4">{decodeURI(city)}</div>
        <p className="text-8xl font-thin mb-2">{Math.round(forecast[0] && forecast[0].temp)}°C</p>
        <p className="text-2xl mb-2">{forecast[0] && forecast[0].description}</p>
        <div className="flex justify-around w-full mt-4 text-gray-600">
          <div className="flex flex-col items-center">
            <p className="font-bold">최고 기온</p>
            <p>{Math.round(forecast[0] && forecast[0].temp_max)}°C</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">최저 기온</p>
            <p>{Math.round(forecast[0] && forecast[0].temp_min)}°C</p>
          </div>
        </div>
      </div>
      {/* TODO 인피니티 스크롤 추가할 부분 */}
      <div className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7 bg-[#f0f4f8] ">
        {forecast.map((weatherData) => {
          return <WeatherCard key={weatherData.date} weatherData={weatherData} />;
        })}
      </div>
    </div>
  );
}
