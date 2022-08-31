import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthTokenService } from './Service/auth-token.service';

//filter -> request -> filter -> controller
//api -> request -> interceptor -> server
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authTokenService:AuthTokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    // console.log("token intercepter called...");
    // let authToken = "krJcPRWxm9rViJiv";
    // const modifiedReq = request.clone({headers:request.headers.set("authToken",authToken)})
    // return next.handle(modifiedReq);


    
    console.log("HTTP METHOD : => ");
    console.log(request.method)
    //header 

    //body 
    // if (request.method.toLowerCase() == "post") { 

    //   console.log("yes we are in post request");
    //   if (request.body instanceof FormData) {
    //     console.log("AuthToken Added in Body")
    //     request = request.clone({
    //       body: request.body.append("authToken", authToken)
    //     })
    //   } else {
    //     console.log(typeof(request.body));
    //     console.log(request.body);

        // let body = request.body
        // return next.handle(request.clone({
        //   setHeaders:{authToken} 
        //   ,body:{body,"authToken":authToken}
        // }))

         // let body = request.body
        // body["authToken"] = authToken

      // }

    // }

    // let authToken = localStorage.getItem("authToken") as string
    let authToken = this.authTokenService.authToken as string
    
    // let headers = new HttpHeaders({"authToken":authToken})
    console.log("auth Token interceptor.....")
    return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  


  }
}
