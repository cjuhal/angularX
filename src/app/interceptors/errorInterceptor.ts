import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
//import { ToastService } from './services/toast.service'; // Tu servicio de alertas

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  //const toast = inject(ToastService);

  return next(req).pipe(
    catchError((error) => {
      let mensaje = 'Ha ocurrido un error inesperado';

      if (error.status === 401) mensaje = 'Sesión expirada. Por favor reingresa.';
      if (error.status === 404) mensaje = 'El recurso de WordPress no existe.';
      if (error.status === 500) mensaje = 'Error en el servidor de Mindata.';

      // Emitimos el toast
      //toast.showError(mensaje);

      // Importante: relanzamos el error para que el servicio/componente también sepa que falló
      return throwError(() => error);
    })
  );
};