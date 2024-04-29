import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccidentsModule } from './accidents/accidents.module';
import { Accidents } from './accidents/accidents.entity';
import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionItems } from './action_items/action_items.entity';
import { ActionItemsModule } from './action_items/action_items.module';

@Module({
  imports: [
    AccidentsModule,
    ActionItemsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/Natural_disasters.sqlite',
      entities: [Accidents, ActionItems, Users],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
