# Instalación global del CLI de NestJS

npm install -g @nestjs/cli

# Verificación de la versión de NestJS instalada

nest -v

# Creación de una nueva aplicación NestJS llamada "myfirstapp"

nest new myfirstapp

❯❯ myfirstapp git:(master)  16:06 npm run start

❯❯ myfirstapp git:(master)  16:07 npm run start:dev

❯❯ myfirstapp git:(master) 16:07 npm run build

❯❯ myfirstapp git:(master)  16:07 npm run lint

❯❯ myfirstapp git:(master)  16:33 nest generate --help

❯❯ myfirstapp git:(master) 16:34 nest generate module projects

❯❯ myfirstapp git:(master) 16:35 nest g mo auth

❯❯ myfirstapp git:(master) 16:54 nest g co projects

❯❯ myfirstapp git:(master) 17:10 nest g s projects

❯❯ myfirstapp git:(master) 17:11 nest g s auth --no-spec

❯❯ myfirstapp git:(master)  15:14 nest g pipe hello/pipes/validateuser

❯❯ myfirstapp git:(master)  15:26 nest g guard /hello/guards/auth

❯❯ myfirstapp git:(master)  15:37 nest g middleware
? What name would you like to use for the middleware? users/logger
CREATE src/users/logger/logger.middleware.ts (206 bytes)
CREATE src/users/logger/logger.middleware.spec.ts (195 bytes)

❯❯ myfirstapp git:(master) 16:01 nest g resource payments
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
CREATE src/payments/payments.controller.ts (991 bytes)
CREATE src/payments/payments.controller.spec.ts (616 bytes)
CREATE src/payments/payments.module.ts (278 bytes)
CREATE src/payments/payments.service.ts (677 bytes)
CREATE src/payments/payments.service.spec.ts (492 bytes)
CREATE src/payments/dto/create-payment.dto.ts (34 bytes)
CREATE src/payments/dto/update-payment.dto.ts (185 bytes)
CREATE src/payments/entities/payment.entity.ts (25 bytes)
UPDATE package.json (2120 bytes)
UPDATE src/app.module.ts (576 bytes)
✔ Packages installed successfully.
