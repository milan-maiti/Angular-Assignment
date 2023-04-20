import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MaterialModule } from 'src/app/common/material/material.module';
import { SharedModule } from 'src/app/common/shared/shared.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    SharedModule,
    
  ]
})
export class PostModule { }
