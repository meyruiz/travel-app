import { Component, OnInit } from '@angular/core';
import { doesNotReject } from 'assert';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post = {
    id: 1,
    title: "At the beach in winter",
    comments: 0,
    image: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg",
    category: "Travel",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  }

  comments = [{
    id: 1,
    author: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  },
  {
    id: 2,
    author: "John Dude",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget est turpis. Sed lectus purus, viverra eget libero sit amet, condimentum eleifend arcu. Proin finibus interdum eros, nec luctus nisi maximus sagittis. Nunc pulvinar odio vel accumsan aliquam. Etiam at lacinia ligula. Donec porttitor nec ex non maximus."
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
