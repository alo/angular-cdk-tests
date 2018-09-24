import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { PageActionsComponent } from './components/page-actions/page-actions.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { PageTitleComponent } from './components/page-actions/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [MyNavComponent, PageActionsComponent, PageTitleComponent],
  exports: [
    MyNavComponent,
    PageActionsComponent,
    PageTitleComponent,
    PortalModule,
    MatButtonModule
  ]
})
export class SharedModule {}
