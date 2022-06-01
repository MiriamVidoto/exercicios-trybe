const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError =  (errorReason) =>
console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callbackSucess, calbackError) => {
    const result = getMarsTemperature();
    const taxa = Math.random()
    return setTimeout(() => {
        if (taxa <= 0.6){
        callbackSucess(result)
        } else {
        calbackError('faled')
        }
    }, messageDelay())
};

// sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);