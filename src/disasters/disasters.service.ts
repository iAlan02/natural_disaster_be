import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDisasterDto } from './dto/create-disaster.dto';
import { UpdateDisasterDto } from './dto/update-disaster.dto';
import { Disasters } from './disasters.entity';

@Injectable()
export class DisastersService {
  constructor(
    @InjectRepository(Disasters)
    private readonly disastersRepository: Repository<Disasters>,
  ) {}

  async create(createDisasterDto: CreateDisasterDto): Promise<Disasters> {
    const disaster = this.disastersRepository.create(createDisasterDto);
    return await this.disastersRepository.save(disaster);
  }

  async findAll(): Promise<Disasters[]> {
    return this.disastersRepository.find();
  }

  async findOne(id: number): Promise<Disasters> {
    const disaster = await this.disastersRepository.findOne({
      where: { id: id },
    });

    if (!disaster) {
      throw new Error('Disaster not found');
    }

    return disaster;
  }

  async update(
    id: number,
    updateDisasterDto: UpdateDisasterDto,
  ): Promise<Disasters> {
    const disaster = await this.findOne(id);
    this.disastersRepository.merge(disaster, updateDisasterDto);
    return await this.disastersRepository.save(disaster);
  }

  async remove(id: number) {
    const result = await this.disastersRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Disaster not found');
    }
    return { message: 'Disaster successfully deleted' };
  }
}
