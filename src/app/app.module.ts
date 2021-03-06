import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ListModuleModule} from 'src/app/components/list-module/list-module.module';
import {HeaderComponent} from './components/header/header.component';
import {PhotosComponent} from './components/photos/photos.component';
import {PhotoItemComponent} from './components/photo-item/photo-item.component';
import {OnlineInterceptor} from './auth/online.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotosComponent,
    PhotoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ListModuleModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OnlineInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
