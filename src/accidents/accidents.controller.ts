import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AccidentsService } from './accidents.service';
import { Accidents } from './accidents.entity';
import { UpdateAccidentDto } from './dto/update_accident.dto';
import { CreateAccidentDto } from './dto/create_accident.dto';

@Controller('accidents')
export class AccidentsController {
  constructor(private readonly accidentsService: AccidentsService) {}
  @Post()
  create(@Body() createAccidentDto: CreateAccidentDto): Promise<Accidents> {
    return this.accidentsService.create(createAccidentDto);
  }

  @Get()
  findAll(): Promise<Accidents[]> {
    return this.accidentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Accidents> {
    return this.accidentsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccidentDto: UpdateAccidentDto,
  ): Promise<Accidents> {
    return this.accidentsService.update(+id, updateAccidentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accidentsService.remove(+id);
  }
}
