import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('worldcups')
export class WorldCup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  LastRevisionDate: Date;

  @Column()
  NumberOfTimesPlayed: number;

  @Column()
  ImageVideoClassification: string;
}
