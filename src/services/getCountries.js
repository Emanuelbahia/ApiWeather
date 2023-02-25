//en la carpeta services hago los servicios para consumir las distintas APIs

import { ajax } from "../tools/ajax";

export const getCountries = async () => {
  const optionsRequest = {
    method: "GET",
    url: "https://restcountries.com/v3.1/all",
  };

  return await ajax(optionsRequest);
};
