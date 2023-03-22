import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoogleUser } from '../sequelize/models/google-user';
import { SessionSerializer } from './utils/Serializer';

@Module({
  imports: [SequelizeModule.forFeature([GoogleUser])],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    // AuthService,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
