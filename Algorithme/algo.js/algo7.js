function convertirCelsiusEnFahrenheit(temperatureCelsius) {
    const temperatureFarhenheit = (temperatureCelsius * 9/5) + 32;
    return temperatureFarhenheit;
}

// Demande à l'utilisateur de saisir la température en Celsius
const temperatureCelsius = parseFloat(prompt("Entrez la température en degrés Celsius :"));

// Convertit la température en degrés Fahrenheit
const temperatureFarhenheit = convertirCelsiusEnFahrenheit(temperatureCelsius);

alert(temperatureCelsius + " degrés Celsius équivaut à " + temperatureFarhenheit + "degrés fahrenheit.");