import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Db } from 'typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // docker-compose.yml의 environment 값을 사용
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DATABASE_HOST || 'db',
        port: parseInt(process.env.DATABASE_PORT || '3306', 10), // 3306
        username: process.env.DATABASE_USER || 'user',
        password: process.env.DATABASE_PASSWORD || 'password',
        database: process.env.DATABASE_NAME || 'mydatabase',
        autoLoadEntities: true, // 자동으로 엔티티 로드해준다!
        synchronize: true, // 개발 환경에서만 사용 권장!!!!!!!!!
      }),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}