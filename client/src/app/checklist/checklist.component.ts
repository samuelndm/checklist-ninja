import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor(private _http: HttpClient, private _PostsService: PostsService) { }

  textPost: any = ""
  dataPost: any = ""
  posts: any[] = []

  getPosts() {
    this._PostsService.getPosts().subscribe((posts: any) => {
      this.posts = posts
    })


  }

  postPost() {
    this._PostsService.postPost({
      "texto": this.textPost,
      "data": this.dataPost
    }).subscribe(() => {
      this.getPosts()
    })

    this.textPost = ""
    this.dataPost = ""

  }

  deletePosts() {
    const selectedPostsIds = this.posts
      .filter(post => {
        return (post.checked)
      })
      .map(post => {
        return (post.id)
      })

    selectedPostsIds.forEach(id => {
      this.deletePost(id)
    })

  }

  deletePost(id) {
    this._PostsService.deletePost(id).subscribe(() => {
      this.getPosts()
    })
  }

  ngOnInit() {
    this.getPosts()
}

}
