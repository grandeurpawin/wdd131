const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');

currentYear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp_f, wind_speed_mph) {
    return (
        35.74 + 0.6215 * temp_f - 35.75 * (wind_speed_mph ** 0.16) + 0.4275 * temp_f * (wind_speed_mph ** 0.16)
    );
}

const temp_f = 91.7;
const wind_speed_mph = 16.1;
const windChillElement = document.querySelector('#windChill');

if (temp_f <= 50 && wind_speed_mph > 3) {
    const windChill = calculateWindChill(temp_f, wind_speed_mph).toFixed(2);
    windChillElement.innerHTML = `${windChill} °F`;
} else {
    windChillElement.innerHTML = 'N/A';
}