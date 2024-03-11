const getWeatherData = async (city = 'Москва') => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3aef2940ca6cf911638516c2dc9a4851&lang=ru&units=metric`
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export default getWeatherData;