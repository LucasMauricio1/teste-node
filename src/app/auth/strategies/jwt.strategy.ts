import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'sdfjop390423jtj3fpfweo432t4op6',
    });
  }

  async validate(payload: any) {
    return { userId: payload.userId, type: payload.type }; // Aqui você pode personalizar a validação do token JWT, por exemplo, verificando se o usuário existe no banco de dados
  }
}
