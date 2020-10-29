class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.windDirection = document.getElementById('w-wind-direction');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather) {
        this.location.textContent = `${weather.location.name} ${weather.location.region}`;
        this.desc.textContent = weather.current.weather_descriptions;
        this.string.textContent = `${weather.current.temperature} °F`;
        this.icon.setAttribute('src', weather.current.weather_icons);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${weather.current.feelslike} °F`;
        this.windDirection.textContent = `Wind Direction: ${weather.current.wind_dir}`;
        this.wind.textContent = `Wind speed: ${weather.current.wind_speed} mph`;
    }
}