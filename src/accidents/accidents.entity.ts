import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('accidents')
export class Accidents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'accident_type', length: 50, nullable: false })
  accidentType: string;

  @Column({ name: 'location', length: 50, nullable: false })
  location: string;

  @Column({ name: 'date', length: 50, nullable: false })
  date: string;
}
