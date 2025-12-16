import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post('crear')
  crear(@Body() datos: any) {
    return this.usuarioService.crearUsuario(
      datos.correo,
      datos.password,
    );
  }

  @Post('login')
  login(@Body() datos: any) {
    return this.usuarioService.login(
      datos.correo,
      datos.password,
    );
  }

  @Get()
  listar() {
    return this.usuarioService.listarUsuarios();
  }
}
