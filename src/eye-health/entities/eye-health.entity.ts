import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EyeHealth {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    useEyeGap: string;
  
    @Column()
    restGap: string;
  
    @Column({ nullable: true })
    eyeConfigurationId: number;
    
    @CreateDateColumn({type: 'datetime'})
    createTime: number;
}
