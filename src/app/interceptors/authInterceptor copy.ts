import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      //ingresar token para pegarle a la api aqui
    },
  });

  return next(authReq);
};
