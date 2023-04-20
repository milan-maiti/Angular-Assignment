import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatMenuModule,
    MatTooltipModule
    
  ]
})
export class MaterialModule { }
