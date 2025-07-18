import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum ProjectStatus {
  PENDING = 'pendente',
  IN_PROGRESS = 'em andamento',
  COMPLETED = 'concluído',
}

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  responsible: string;

  @Column({ type: 'varchar', default: ProjectStatus.PENDING })
  status: ProjectStatus;
}
