import { DateTime } from 'luxon';
import { toast } from 'react-toastify';

const apiBaseURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const getWeather = (dataType, searchParams) => {
  const url = new URL(`${apiBaseURL}/data/2.5/${dataType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: apiKey });
  return fetch(url).then((res) => {
    if (res.ok) return res.json();
    else {
      return res.json().then((data) => toast.error(data.message));
    }
  });
};

const formatCurrWeather = (data) => {
  const {
    coord: { lat, lon },
    name,
    dt,
    timezone,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather,
    sys: { country, sunrise, sunset },
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    name,
    dt,
    timezone,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastData = (data) => {
  let { timezone } = data.city;
  let hourly = data.list.slice(0, 5).map((i) => {
    return {
      title: formatToLocalTime(i.dt, timezone, 'hh:mm a'),
      temp: i.main.temp,
      icon: i.weather[0].icon,
    };
  });

  return { hourly };
};

const getFormattedData = async (searchParams) => {
  const weatherData = await getWeather('weather', searchParams);

  const formattedCurrWeather = formatCurrWeather(weatherData);

  const { lat, lon } = formattedCurrWeather;

  const forecastData = await getWeather('forecast', {
    lat,
    lon,
    units: searchParams.units,
  });

  const formattedForecastData = formatForecastData(forecastData);

  return { ...formattedCurrWeather, ...formattedForecastData };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(secs)
    .setZone(zone / 60)
    .toFormat(format);
};

const getWeatherIcon = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export default getFormattedData;

export { formatToLocalTime, getWeatherIcon };
