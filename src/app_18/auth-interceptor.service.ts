import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType
} from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request is on its way");
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "xxxx")
    });
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        // Response interceptor
        if (event.type === HttpEventType.Response) {
          console.log("AuthInterceptorService event", event.body);
        }
      })
    );
  }
}
