import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TodoConfiguration } from 'src/todo-configuration/entities/todo-configuration.entity';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    type: string;

    @Column()
    status: string;

    @Column()
    startTime: string;

    @CreateDateColumn({type: 'datetime'})
    createTime: number;

    @ManyToOne(() => TodoConfiguration, (todoConfiguration) => todoConfiguration.todo)
    todoConfiguration: TodoConfiguration;
}
