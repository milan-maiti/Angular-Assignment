import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';
import { TodoService } from './todo.service';
import { TodoList } from 'src/app/interface/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  dataSource: MatTableDataSource<TodoList>;
  displayedColumns: string[] = ['userId', 'title', 'completed']
  todoList: Array<TodoList> = [];
  offset: number = 0;
  limit: number = 10;
  count: number = 100;
  todoData: any = [];


  constructor(
    public postService: TodoService,
    public common: CommonService
  ) {
    this.dataSource = new MatTableDataSource(this.todoList);

  }

  ngOnInit(): void {

    this.getPostList();

  }

  getPostList() {

    this.postService.getTodoList().subscribe({
      next: (res: any) => {
        this.todoData = res;
        this.todoList = res;
        this.count = res.length
        this.todoList = this.todoList.slice(0, 10);
        this.dataSource = new MatTableDataSource(this.todoList);
      },
      error: (e => {
        console.log(e);

      })
    })

  }

  pageChangeData() {

    this.todoList.slice(0, 10);
    this.dataSource = new MatTableDataSource(this.todoList);

  }

  receivedPage(event: any) {
    this.todoList = this.todoData;
    const start = event.pageIndex * event.pageSize;
    const end = event.pageIndex * event.pageSize + event.pageSize;
    const data = this.todoList.slice(start, end);    
    this.dataSource = new MatTableDataSource(data);
  }

}
