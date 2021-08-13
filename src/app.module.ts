import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

// nest generate controller OR nest g co
// --no-spec -> no test created
// nest g co modules/abc [--dry-run]

// nest generate service OR nest g s

// nest g module <name>

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
