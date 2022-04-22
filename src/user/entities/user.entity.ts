import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  todoConfigurationId: number;

  @Column({ nullable: true })
  eyeHealthConfigurationId: number;
  
  @CreateDateColumn({type: 'datetime'})
  createTime: number;
}
