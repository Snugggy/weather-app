class Weather {
    constructor(city, state) {
        this.apiKey = '2cf08043a26ae79c8da3d14d7fbb1522';
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