import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DisastersModule } from './disasters/disasters.module';
import { Disasters } from './disasters/disasters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DisastersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/Natural_disasters.sqlite',
      entities: [Disasters],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
