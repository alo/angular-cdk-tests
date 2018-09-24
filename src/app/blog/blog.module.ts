import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, SharedModule],
  declarations: [PostsComponent]
})
export class BlogModule {}
