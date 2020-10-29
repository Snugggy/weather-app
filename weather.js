class Weather {
    constructor(city, state) {
        this.apiKey = '//Enter your api key here';
        this.city = city;
        this.state = state;
    }

    // Fetch weather
    async getWeather() {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city},${this.state}&units=f`)
        

        const responseData = await response.json();

        return responseData;
        
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}
