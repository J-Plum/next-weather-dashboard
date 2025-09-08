"use client";
import WeatherCard from "./WeatherCard";
import dummyWeatherData from "../../../../mock/dummyWeatherData";
import { useEffect, useRef, useState } from "react";

export default function WeatherDisplay({ city }) {
  const { forecast } = dummyWeatherData;
  const cityName = decodeURI(city);

  const [itemsToShow, setItemsToShow] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  // 리렌더링방지
  const loadingRef = useRef(false);

  const ITEMS_PER_LOAD = 5;

  const loadMoreItems = () => {
    // 로딩중이거나 더 불러올 함수가 없으면 종료
    if (loadingRef.current || !hasMore) return;

    console.log("loading....");

    setTimeout(() => {
      const nextStartIndex = itemsToShow;
      const nextEndIndex = itemsToShow + ITEMS_PER_LOAD;
      const nextItems = forecast.slice(nextStartIndex, nextEndIndex);

      if (nextItems.length > 0) {
        setItemsToShow(nextEndIndex);
      } else {
        setHasMore(false);
      }

      loadingRef.current = false;
      console.log("success....");
    }, 500); // 0.5초 지연
  };

  const isLoading = useRef(false);

  useEffect(() => {
    console.log(itemsToShow);

    if (!hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // isIntersecting이 true이고, 로딩 중이 아닐 때만 loadMoreItems 호출
        if (entries[0].isIntersecting && !loadingRef.current) {
          loadMoreItems();
        }
      },
      { threshold: 1 } // threshold는 로 다시 변경
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [itemsToShow, hasMore]);

  // **itemsToShow가 변경된 후 스크롤을 조작하는 useEffect**
  useEffect(() => {
    // 컴포넌트가 처음 마운트되거나 아이템이 로드될 때 실행
    if (isLoading.current) {
      // DOM이 업데이트된 후 스크롤을 조정
      const rect = observerTarget.current.getBoundingClientRect();
      const observerHeight = rect.height;
      window.scrollBy({
        top: -observerHeight,
        behavior: "smooth",
      });
      isLoading.current = false; // 로딩 완료
    }
  }, [itemsToShow]);

  return (
    <div>
      <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl">
        <div className="text-5xl font-bold mb-4">{cityName}</div>
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
      ---
      <div className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7 bg-[#f0f4f8]">
        {forecast.slice(0, itemsToShow).map((weatherData) => (
          <WeatherCard key={weatherData.date} weatherData={{ ...weatherData, cityName }} />
        ))}
        {hasMore && (
          <div ref={observerTarget} className="col-span-full text-center py-40">
            <p>로딩 중...</p>
          </div>
        )}
      </div>
    </div>
  );
}
