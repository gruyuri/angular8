import { Component, OnInit } from '@angular/core';
import { ChapterComponentComponent } from '../chapter-component/chapter-component.component';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {
  chapters = [];
  numClicked = 0;
  status : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onCreateChapter() {
    const newId = this.chapters.length + 1;
    this.chapters.push(newId);
    this.numClicked++;
    this.status = !this.status;
  }

  hasItems() {
    return (this.numClicked > 0);
  }

}
