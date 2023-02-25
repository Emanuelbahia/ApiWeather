// Aca estan todas las llamadas por fetch o axios

import axios from "axios";

//options va a ser un objeto literal de a donde yo quiero ir
export const ajax = async (options) =>
  await axios.request(options).then((response) => response.data);
