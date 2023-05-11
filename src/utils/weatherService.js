import { DateTime } from 'luxon';

const apiBaseURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const getWeather = (type, searchParams) => {
  const url = new URL(`${apiBaseURL}/data/2.5/${type}`);
  url.search = new URLSearchParams({ ...searchParams, appid: apiKey });
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err.message);
};

const formatCurrWeather = (data) => {
  const {
    coord: { lat, lon },
    name,
    dt,
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
  let hourly = data.list.slice(1, 6).map((i) => {
    return {
      title: formatToLocalTime(i.dt, timezone, 'hh:mm a'),
      temp: i.main.temp,
      icon: i.weather[0].icon,
    };
  });
  // TO DO: let daily;
  return { timezone, hourly };
};

const getFormattedData = async (searchParams) => {
  const formattedCurrWeather = await getWeather('weather', searchParams).then(
    formatCurrWeather
  );

  const { lat, lon } = formattedCurrWeather;

  const formattedForecastData = await getWeather('forecast', {
    lat,
    lon,
    units: searchParams.units,
  }).then(formatForecastData);

  return { ...formattedCurrWeather, ...formattedForecastData };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(secs)
    .setZone(zone/60)
    .toFormat(format);
};

const getWeatherIcon = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export default getFormattedData;

export { formatToLocalTime, getWeatherIcon };
