import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'username', length: 50, nullable: false })
  username: string;

  @Column({ name: 'password', length: 50, nullable: false })
  password: string;

  @Column({ name: 'email', length: 50, nullable: false })
  email: string;

  @Column({ name: 'date', length: 50, nullable: false })
  date: string;
}
