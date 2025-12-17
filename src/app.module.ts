import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsuarioController } from './controllers/usuario.controller';
import { CuentaController } from './controllers/cuenta.controller';
import { TransaccionController } from './controllers/transaccion.controller';

import { UsuarioService } from './services/usuario.service';
import { CuentaService } from './services/cuenta.service';
import { TransaccionService } from './services/transaccion.service';

import { UsuarioSchema } from './schemas/usuario.schema';
import { CuentaSchema } from './schemas/cuenta.schema';
import { TransaccionSchema } from './schemas/transaccion.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/banco-BV'),
    MongooseModule.forFeature([
      { name: 'Usuario', schema: UsuarioSchema },
      { name: 'Cuenta', schema: CuentaSchema },
      { name: 'Transaccion', schema: TransaccionSchema },
    ]),
  ],
  controllers: [
    UsuarioController,
    CuentaController,
    TransaccionController,
  ],
  providers: [
    UsuarioService,
    CuentaService,
    TransaccionService,
  ],
})
export class AppModule {}
