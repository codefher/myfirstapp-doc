import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // * La linea de abajo es una forma de verificar si la URL es /greet. Si es así, se devuelve false, lo que significa que el usuario no puede acceder a esta ruta.
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);

    if (request.url === '/greet') return false;

    return true;
  }
}
