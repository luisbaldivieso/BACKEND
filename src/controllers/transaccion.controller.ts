import { Controller, Post, Body, Get } from '@nestjs/common';
import { TransaccionService } from '../services/transaccion.service';

@Controller('transacciones')
export class TransaccionController {
  constructor(private transaccionService: TransaccionService) {}

  @Post('transferir')
  transferir(@Body() datos: any) {
    return this.transaccionService.transferir(
      datos.cuentaOrigen,
      datos.cuentaDestino,
      datos.monto,
    );
  }

  @Get()
  historial() {
    return this.transaccionService.historial();
  }
}
