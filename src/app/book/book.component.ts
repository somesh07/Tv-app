import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.bookservice.getbooks().subscribe(res=>{
      this.books = res;
      })
  }

}
