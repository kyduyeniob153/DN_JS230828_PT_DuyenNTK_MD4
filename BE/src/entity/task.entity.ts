import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "md4_exam_task"})
export class TaskTodo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: boolean;
}