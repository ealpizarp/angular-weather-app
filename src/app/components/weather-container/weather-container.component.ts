import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData('San Jose');
  }

  updateCityData(city: string) {
    this.getWeatherData(city);
    console.log(city);
  }

  private getWeatherData(cityName: string) : void {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }

}
