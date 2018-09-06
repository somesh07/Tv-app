import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: any;
  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.bookservice.getHouses().subscribe(res=>{
      this.houses = res;
    })
  }

}
