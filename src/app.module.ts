import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CSVModule } from './CSV/csv.module';

@Module({
  imports: [CSVModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
