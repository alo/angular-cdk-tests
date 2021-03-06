import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './containers/profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  // entryComponents: [PageActionsComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  declarations: [ProfileComponent]
})
export class ProfileModule {}
