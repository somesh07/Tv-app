import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit,OnDestroy {
  id: number;
  sub :any;
  bookdetails: any;
  constructor(private route: ActivatedRoute,private bookService: BookService) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.bookService.getbooksByid(this.id).subscribe(res=>{
        this.bookdetails = res;
      })
   });
  
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
