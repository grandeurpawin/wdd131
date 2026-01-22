const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

function calculateWindChill(tempF, windSpeedMph) {
    return (35.74 + 0.6215 * tempF - 35.75 * (windSpeedMph ** 0.16) + 0.4275 * tempF * (windSpeedMph ** 0.16));
}

const tempF = 91.7;
const windSpeedMph = 16.1;
const windChillElement = document.querySelector('#windChill');

if (tempF <= 50 && windSpeedMph > 3) {
    const windChill = calculateWindChill(tempF, windSpeedMph).toFixed(2);
    windChillElement.innerHTML = `${windChill} °F`
} else {
        windChillElement.innerHTML = 'N/A';
    }