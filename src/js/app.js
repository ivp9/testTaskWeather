import getWeatherData from "./api.js";
import createContent from "./createContent.js";
import createHeader from "./createHeader.js";

const app = async () => {
  const weatherData = await getWeatherData();
  const header = createHeader(weatherData.name);
  const content = createContent(weatherData);
  document.body.append(header, content);

  console.log(weatherData);
};

export default app;
