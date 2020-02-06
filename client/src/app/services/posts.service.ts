import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  apiPost='http://localhost:3000/posts'

  public getPosts() {
    return this._http.get(this.apiPost)
  }

  public postPost(post) {
    return this._http.post(this.apiPost, post)
  }

  public deletePost(id) {
    return this._http.delete(this.apiPost + '/' + id)
  }
  
}
