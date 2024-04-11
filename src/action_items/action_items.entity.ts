import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('action_items')
export class ActionItems {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'action_item', length: 50, nullable: false })
  actionItem: string;

  @Column({ name: 'due_date', length: 50, nullable: false })
  dueDate: string;

  @Column({ name: 'priority', length: 50, nullable: false })
  priority: string;

  @Column({ name: 'status', length: 50, nullable: false })
  status: string;
}
