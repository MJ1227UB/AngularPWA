import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class OnlineInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!window.navigator.onLine) {
      console.log('req ', req);
      caches.open('POST_CACHE').then(this.onFulfilled);
    }

    return next.handle(req);
  }

  private async onFulfilled(cache: Cache): Promise<Cache> {
    await cache.put('https://via.placeholder.com/600/a7c272', null);
    return cache;
  }

}
