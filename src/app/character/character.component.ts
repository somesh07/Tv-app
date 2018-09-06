import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  charcters: any;

  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.bookservice.getCharcter().subscribe(res=>{
      this.charcters = res;
    })
  }


}
