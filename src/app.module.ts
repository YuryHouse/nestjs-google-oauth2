import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoogleUser } from './sequelize/models/google-user';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestjs_google_oauth2',
      models: [GoogleUser],
      synchronize: true,
      autoLoadModels: true,
    }),
    PassportModule.register({ session: true }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
