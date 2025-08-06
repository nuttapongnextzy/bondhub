import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [PrismaModule, HealthModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
