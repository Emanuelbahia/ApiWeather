import { ajax } from "../tools/ajax";

export const getCities = async (countryCode) => {
  const optionsRequest = {
    method: "GET",
    url: "https://spott.p.rapidapi.com/places",
    headers: {
      "X-RapidAPI-Key": "d5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58",
      "X-RapidAPI-Host": "spott.p.rapidapi.com",
    },

    params: {
      limit: 50,
      type: "CITY",
      country: countryCode ?? "US",
    },
  };

  return await ajax(optionsRequest);
};
