import { ajax } from "../tools/ajax";

export const getCityWeather = async (city) => {
  const optionsRequest = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",

    params: {
      q: city,
      appid: "1cf950f700cf1718cb2d6efbf49bc4fe",
      units: "metric", //para q me lo traiga en grados centigrados.
    },
  };

  return await ajax(optionsRequest);
};
