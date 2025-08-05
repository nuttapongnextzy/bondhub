# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run start:dev    # Start with hot reload (recommended for development)
npm run start:debug  # Start with debugging enabled
npm run build        # Build the application
```

### Code Quality
```bash
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
```

### Testing
```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:cov     # Generate test coverage
npm run test:e2e     # Run end-to-end tests
```

### Database
```bash
npx prisma migrate dev    # Create and apply migrations
npx prisma generate       # Regenerate Prisma Client
npx prisma studio         # Open Prisma Studio GUI
```

## Architecture

This is a NestJS API with modular architecture:

- **Module Organization**: Feature-based modules (users, health, prisma)
- **Database**: PostgreSQL with Prisma ORM (custom output: `/generated/prisma`)
- **API Prefix**: All endpoints are prefixed with `/api`
- **Port**: Runs on port 4000 by default (configurable via `PORT` env var)

### Key Modules

1. **PrismaModule** (`src/prisma/`): Database service with proper NestJS lifecycle management
2. **UsersModule** (`src/users/`): User management with controller, service, and DTOs
3. **HealthModule** (`src/health/`): Health check endpoint

### Current State

- Database integration is set up but currently commented out in users.service.ts
- Using placeholder data instead of actual database queries
- ValidationPipe and LoggingInterceptor are commented out in main.ts
- Basic CRUD structure established but not fully implemented

### Environment Setup

Requires `.env` file with:
```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### Development Notes

- Follow NestJS conventions for new modules
- Each module should have: module file, controller, service, and DTOs
- Use PrismaService for all database operations
- Test files use `.spec.ts` extension
- Prisma schema changes require running migrations