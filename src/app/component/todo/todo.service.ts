import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoList } from 'src/app/interface/todo.interface';
import { CommonService } from 'src/app/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    public httpClient: HttpClient,
    private service: CommonService
  ) { }

  getTodoList = () => {    
    return this.httpClient.get<TodoList>(this.service.apiUrl + 'todos');
  }
}
