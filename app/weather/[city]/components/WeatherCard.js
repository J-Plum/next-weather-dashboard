export default function WeatherCard({ weatherData }) {
  const { date, temp, description, cityName } = weatherData;

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl ">
      <div>{cityName}</div>
      <div>{date}</div>
      <div>{temp}°C</div>
      <div>{description}</div>
    </div>
  );
}
