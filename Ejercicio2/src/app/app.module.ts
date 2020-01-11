import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule, 
        MatButtonModule, 
        MatSelectModule, 
        MatIconModule,
        MatFormFieldModule, 
        MatCardModule,
        MatDividerModule,
        MatCheckboxModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
      }
  from '@angular/material';

export const materialModules = [
  MatFormFieldModule,
  MatInputModule, 
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatCheckboxModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule
];

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    ...materialModules,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
