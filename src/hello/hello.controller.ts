import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({ message: 'Hello World!' });
  }

  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return 'something new';
  }

  @Get('notfound')
  @HttpCode(404)
  notFound() {
    return '404 Not Found';
  }

  @Get('error')
  @HttpCode(500)
  error() {
    throw new Error('Internal Server Error');
  }

  // * PIPES
  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    // ? ParseIntPipe es un pipe que parsea el valor de la URL y lo convierte en un número entero.
    return num + 14;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    // ? ParseBoolPipe es un pipe que parsea el valor de la URL y lo convierte en un booleano.
    console.log(typeof status);
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
    console.log(typeof query.name);
    console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age + 30} years old`;
  }
}
