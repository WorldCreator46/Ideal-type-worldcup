import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('worldcups')
export class WorldCup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  createrId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  numberOfTimesPlayed: number;

  @Column()
  imageVideoClassification: string;

  @CreateDateColumn({
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;

  @UpdateDateColumn({
    name: 'last_revision_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastRevisionDate: Date;
}
