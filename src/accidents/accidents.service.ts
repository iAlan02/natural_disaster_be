import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccidentDto } from './dto/create_accident.dto';
import { UpdateAccidentDto } from './dto/update_accident.dto';
import { Accidents } from './accidents.entity';

@Injectable()
export class AccidentsService {
  constructor(
    @InjectRepository(Accidents)
    private readonly accidentsRepository: Repository<Accidents>,
  ) {}

  async create(createAccidentDto: CreateAccidentDto): Promise<Accidents> {
    const accident = this.accidentsRepository.create(createAccidentDto);
    return await this.accidentsRepository.save(accident);
  }

  async findAll(): Promise<Accidents[]> {
    return this.accidentsRepository.find();
  }

  async findOne(id: number): Promise<Accidents> {
    const accident = await this.accidentsRepository.findOne({
      where: { id: id },
    });

    if (!accident) {
      throw new Error('Accident not found');
    }

    return accident;
  }

  async update(
    id: number,
    updateAccidentDto: UpdateAccidentDto,
  ): Promise<Accidents> {
    const accident = await this.findOne(id);
    this.accidentsRepository.merge(accident, updateAccidentDto);
    return await this.accidentsRepository.save(accident);
  }

  async remove(id: number) {
    const result = await this.accidentsRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Accident not found');
    }
    return { message: 'Accident successfully deleted' };
  }
}
