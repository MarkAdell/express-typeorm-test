import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id = 0;

    @Column("varchar", { length: 100 })
    title = '';

}
