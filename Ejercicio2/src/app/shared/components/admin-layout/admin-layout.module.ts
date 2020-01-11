import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { materialModules } from 'src/app/app.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from 'src/app/views/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, SharedModule, ...materialModules],
  declarations: [AdminLayoutComponent, DashboardComponent]
})
export class AdminLayoutModule {}
