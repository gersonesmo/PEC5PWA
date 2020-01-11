import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { materialModules } from 'src/app/app.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [SharedModule, SigninRoutingModule, ...materialModules],
  providers: []
})
export class SigninModule {}
