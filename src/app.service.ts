import { Injectable } from '@nestjs/common';
// import * as getData from './functions/read';
// import * as postData from './functions/create';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // getAllDisasters(): Promise<any[]> {
  //   return getData.selectAllDisasters();
  // }

  // getAllStructures(): Promise<any[]> {
  //   return getData.selectAllStructures();
  // }

  // getAllVictims(): Promise<any[]> {
  //   return getData.selectAllVictims();
  // }

  // getAllActionItems(): Promise<any[]> {
  //   return getData.selectAllActionItems();
  // }

  // addNewDisaster(
  //   disasterType: string,
  //   location: string,
  //   date: string,
  // ): Promise<any[]> {
  //   console.log(disasterType);
  //   return postData.addNewDisasters(disasterType, location, date);
  // }
}
