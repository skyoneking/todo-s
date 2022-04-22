import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EyeHealthConfiguration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  configName: string;

  @Column()
  useEyeGap: string;

  @Column()
  restGap: string;

  @CreateDateColumn({type: 'datetime'})
  createTime: number;
}
