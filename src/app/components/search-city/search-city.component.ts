import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  @Output() searchCityValue: EventEmitter<string> = new EventEmitter;

  constructor() { }

  cityName: string = 'San Jose';

  ngOnInit(): void {
    this.cityName = '';
  }
  
  onSubmit() {
    this.searchCityValue.emit(this.cityName);
    this.cityName = '';
  }



}
