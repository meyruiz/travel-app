import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CategoriesComponent } from './blog-post/categories/categories.component';
import { PostComponent } from './blog-post/post/post.component';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterCategoryPipe } from './filter-category.pipe';
import { PostDetailComponent } from './blog-post/post-detail/post-detail.component';

const MaterialComponents = [MatButtonModule, MatButtonToggleModule, MatIconModule];

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    CategoriesComponent,
    PostComponent,
    PostDetailComponent,
    FilterCategoryPipe,
    PostDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
