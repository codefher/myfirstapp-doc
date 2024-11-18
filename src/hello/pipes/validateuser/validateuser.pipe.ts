import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);

    const ageNumber = Number(value.age);

    if (isNaN(ageNumber)) {
      // * HttpException es una clase de la librería @nestjs/common que se utiliza para crear una respuesta HTTP con un código de estado y un mensaje de error.
      // ? HttpStatus.BAD_REQUEST es un código de estado HTTP que se utiliza para indicar que la solicitud no es válida.
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: ageNumber };
  }
}
