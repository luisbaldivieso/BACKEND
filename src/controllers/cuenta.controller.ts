import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CuentaService } from '../services/cuenta.service';

@Controller('cuentas')
export class CuentaController {
  constructor(private cuentaService: CuentaService) {}

  @Post('crear')
  crear(@Body() datos: any) {
    return this.cuentaService.crearCuenta(
      datos.usuarioId,
      datos.numeroCuenta,
    );
  }

  @Get(':usuarioId')
  obtener(@Param('usuarioId') usuarioId: string) {
    return this.cuentaService.obtenerCuentasPorUsuario(usuarioId);
  }
}
