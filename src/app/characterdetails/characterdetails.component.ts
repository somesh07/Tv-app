import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit,OnDestroy {
  id: number;
  sub :any;
  characterdetails: any;
  constructor(private route: ActivatedRoute,private bookService: BookService) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.bookService.getCharcterById(this.id).subscribe(res=>{
        this.characterdetails = res;
      })
   });
  
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
