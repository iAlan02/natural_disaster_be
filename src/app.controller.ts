import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('disasters')
  // getAllDisasters(): Promise<any[]> {
  //   return this.appService.getAllDisasters();
  // }

  // @Get('structures')
  // getAllStructures(): Promise<any[]> {
  //   return this.appService.getAllStructures();
  // }

  // @Get('victims')
  // getAllVictims(): Promise<any[]> {
  //   return this.appService.getAllVictims();
  // }

  // @Get('action-items')
  // getAllActionItems(): Promise<any[]> {
  //   return this.appService.getAllActionItems();
  // }

  // @Post('disasters')
  // @HttpCode(201)
  // addNewDisaster(
  //   @Body('disasterType') disasterType: string,
  //   @Body('location') location: string,
  //   @Body('date') date: string,
  // ): Promise<any[]> {
  //   return this.appService.addNewDisaster(disasterType, location, date);
  // }
}
