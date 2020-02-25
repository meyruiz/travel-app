import { Component, OnInit, Input, Inject } from '@angular/core';
import { Post } from '../../post.model';
import { PostService } from '../../post.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(public dialog: MatDialog, private _postService: PostService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDialog, {
      width: '550px',
      data: this.post
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  ngOnInit(): void {
  }

  editPost() {
    this.openDialog();
  }

  erasePost(id) {
    console.log(id);

    this._postService.erasePost(id);
  }
}

@Component({
  selector: 'post-dialog',
  templateUrl: 'post-dialog.html',
  styleUrls: ['./post-dialog.scss']
})
export class PostDialog {

  constructor(
    public dialogRef: MatDialogRef<PostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Post,
    private fb: FormBuilder, private _postService: PostService) {}

    public editPostForm = this.fb.group({
      title: this.data.title,
      image: this.data.image,
      category: this.data.category,
      shortDescription: this.data.shortDescription
    });

  editPostById(post: Post): void {
    this._postService.editPostById(post)
        .subscribe(post => this.data = post);
  }

  onSubmit(): void {
    let post = new Post();

    post.id = this.data.id;
    post.title = this.editPostForm.value.title;
    post.image = this.editPostForm.value.image;
    post.category = this.editPostForm.value.category;
    post.shortDescription = this.editPostForm.value.shortDescription;

    this._postService.editPostById(post);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}