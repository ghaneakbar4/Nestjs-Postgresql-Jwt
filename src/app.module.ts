import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from './User/User.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { User } from './entities/user';
import { Menu } from './entities/Menu';
import { Accsess } from './entities/accsess';
import { User_access } from './entities/user_accsess';
import { Cart } from './entities/cart';
import { CartModule } from './Cart/Cart.module';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres" as any,
      host: "185.182.194.254",
      port: 5432,
      username: "akbar",
      password: "akbar",
      database: "postgres",
      entities: [User,Menu,Accsess,User_access,Cart],
      synchronize: true,
    }),
    
     AuthModule,
     UserModule,
     CartModule
  
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
