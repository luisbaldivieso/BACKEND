import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
    MongooseModule.forFeature([
      { name: 'Usuario', schema: UsuarioSchema },
      { name: 'Cuenta', schema: CuentaSchema },
      { name: 'Transaccion', schema: TransaccionSchema },
    ]),
  ],
  controllers: [
    AppController,
    UsuarioController,
    CuentaController,
    TransaccionController,
  ],
  providers: [AppService, UsuarioService, CuentaService, TransaccionService],
})
export class AppModule {}
