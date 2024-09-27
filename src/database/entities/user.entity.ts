import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { EventEntity } from './event.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'varchar', length: 30, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  whereHear: string;

  // Вказуємо зв'язок з EventEntity
  @Column()
  event_id: number;
  @ManyToOne(() => EventEntity, (event) => event.users)
  @JoinColumn({ name: 'event_id' })
  event: EventEntity;
}
