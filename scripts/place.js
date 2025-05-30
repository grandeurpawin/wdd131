const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");

currentyear.innerHTML = new Date().getFullYear();
lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp_f, wind_speed_mph) {
    return (
        35.74 + 0.6215 * temp_f - 35.75 * (wind_speed_mph ** 0.16) + 0.4275 * temp_f * (wind_speed_mph ** 0.16)
    );
}

const temp_f = 91.7;
const  wind_speed_mph = 16.1;
const windChillElement = document.querySelector("#windchill");

if (temp_f <= 50 && wind_speed_mph > 3) {
    const windChill = calculateWindChill(temp_f, wind_speed_mph).toFixed(2);
    windChillElement.innerHTML = `Wind Chill: ${windChill} °F`;
} else {
    windChillElement.innerHTML = "N/A";
}