import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsList } from 'src/app/interface/post.interface';
import { CommonService } from 'src/app/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    public httpClient: HttpClient,
    private service: CommonService
  ) { }

  getPostList = () => {    
    return this.httpClient.get<PostsList>(this.service.apiUrl + 'posts');
  }
}
