export default function WeatherCard({ weatherData, city }) {
  const { date, temp, description } = weatherData;

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl ">
      <div>{city === "Seoul" ? "서울" : "서울"}</div>
      <div>{date}</div>
      <div>{temp}°C</div>
      <div>{description}</div>
    </div>
  );
}
