import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PostsList } from 'src/app/interface/post.interface';
import { PostService } from './post.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  dataSource: MatTableDataSource<PostsList>;
  displayedColumns: string[] = ['userId', 'title', 'body']
  postList: Array<PostsList> = [];
  offset: number = 0;
  limit: number = 10;
  count: number = 0;
  postData: any = [];


  constructor(
    public postService: PostService,
    public common: CommonService
  ) {
    this.dataSource = new MatTableDataSource(this.postList);

  }

  ngOnInit(): void {

    this.getPostList();

  }

  getPostList() {

    this.postService.getPostList().subscribe({
      next: (res: any) => {
        this.postData = res;
        this.postList = res;
        this.count = res.length
        this.postList = this.postList.slice(0, 10);
        this.dataSource = new MatTableDataSource(this.postList);
      },
      error: (e => {
        console.log(e);

      })
    })

  }

  pageChangeData() {

    this.postList.slice(0, 10);
    this.dataSource = new MatTableDataSource(this.postList);

  }

  receivedPage(event: any) {
    this.postList = this.postData;
    const start = event.pageIndex * event.pageSize;
    const end = event.pageIndex * event.pageSize + event.pageSize;
    const data = this.postList.slice(start, end);    
    this.dataSource = new MatTableDataSource(data);
  }

}
