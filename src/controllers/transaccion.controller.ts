import { Controller, Get } from '@nestjs/common';
import { TransaccionService } from '../services/transaccion.service';

@Controller('transacciones')
export class TransaccionController {
  constructor(private readonly transaccionService: TransaccionService) {}

  @Get()
  findAll() {
    return this.transaccionService.findAll();
  }
}
