import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('disasters')
export class Disasters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'disaster_type', length: 50, nullable: false })
  disasterType: string;

  @Column({ name: 'location', length: 50, nullable: false })
  location: string;

  @Column({ name: 'date', length: 50, nullable: false })
  date: string;
}
