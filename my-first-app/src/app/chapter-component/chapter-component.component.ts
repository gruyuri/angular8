import { Component, OnInit } from '@angular/core';
import { BookComponentComponent } from '../book-component/book-component.component';

@Component({
  selector: 'app-chapter-component',
  templateUrl: './chapter-component.component.html',
  styleUrls: ['./chapter-component.component.css']
})
export class ChapterComponentComponent implements OnInit {
  id = 0;
  createdTime = new Date();

  constructor(book: BookComponentComponent) {
    this.id = book.numClicked;
  }

  ngOnInit() {
  }

  getBackgroundColor() {
    return this.id <= 4 ? 'white' : 'blue';
  }

  getColor() {
    return this.id <= 4 ? 'black' : 'white';
  }


}
