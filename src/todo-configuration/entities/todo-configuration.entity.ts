import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from 'src/todo/entities/todo.entity';

@Entity()
export class TodoConfiguration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    configName: string;

    @Column()
    period: string;

    @Column()
    endTime: string;

    @Column()
    type: string;

    @CreateDateColumn({ type: 'datetime' })
    createTime: number;

    @OneToMany(() => Todo, (todo) => todo.todoConfiguration)
    todo: Todo;
}
