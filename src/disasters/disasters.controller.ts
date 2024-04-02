import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DisastersService } from './disasters.service';
import { Disasters } from './disasters.entity';
import { UpdateDisasterDto } from './dto/update-disaster.dto';
import { CreateDisasterDto } from './dto/create-disaster.dto';

@Controller('disasters')
export class DisastersController {
  constructor(private readonly disastersService: DisastersService) {}
  @Post()
  create(@Body() createDisasterDto: CreateDisasterDto): Promise<Disasters> {
    return this.disastersService.create(createDisasterDto);
  }

  @Get()
  findAll(): Promise<Disasters[]> {
    return this.disastersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Disasters> {
    return this.disastersService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDisasterDto: UpdateDisasterDto,
  ): Promise<Disasters> {
    return this.disastersService.update(+id, updateDisasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disastersService.remove(+id);
  }
}
