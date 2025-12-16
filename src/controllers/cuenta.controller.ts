import { Controller, Get } from '@nestjs/common';
import { CuentaService } from '../services/cuenta.service';

@Controller('cuentas')
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Get()
  findAll() {
    return this.cuentaService.findAll();
  }
}
