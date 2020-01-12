import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { FontSizeDirective } from './shared/directives/fontsize.directive';
import { BrowserModule } from '@angular/platform-browser'

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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    RouterModule.forRoot(rootRouterConfig, { useHash: false,
    preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    ...materialModules,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
