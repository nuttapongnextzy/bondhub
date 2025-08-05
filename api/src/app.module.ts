import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [PrismaModule, HealthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
