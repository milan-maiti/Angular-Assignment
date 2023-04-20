import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() offset: number = 0;
  @Input() limit: number = 0;
  @Input() size: number = 0;
  pageData: any = '';
  @Output() changePage= new EventEmitter()




  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  getPage(event: any) {
    this.pageData = event;
    this.changePage.emit(event)


  }

}
