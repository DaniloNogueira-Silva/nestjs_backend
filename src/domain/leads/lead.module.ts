import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { LeadProviders } from './service/lead.provider';
import { LeadController } from './lead.controller';
import { LeadService } from './service/lead.service';
import { LeadRepository } from './repositories/lead.repository';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [LeadController],
  providers: [
    LeadService,
    LeadRepository,
    JwtService,
    ...LeadProviders,
  ],
  exports: [LeadService]
})
export class LeadModule {}
