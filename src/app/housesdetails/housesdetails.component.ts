import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-housesdetails',
  templateUrl: './housesdetails.component.html',
  styleUrls: ['./housesdetails.component.css']
})
export class HousesdetailsComponent implements OnInit,OnDestroy {
  id: number;
  sub :any;
  housedetails: any;
  constructor(private route: ActivatedRoute,private bookService: BookService) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.bookService.getCHousesById(this.id).subscribe(res=>{
        this.housedetails = res;
      })
   });
  
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
