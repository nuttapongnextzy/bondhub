import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/user.module';

@Module({
  imports: [HealthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
