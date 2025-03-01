import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    studentID!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    middleName!: string;

    @Column()
    course!: string;
    
    @Column()
    age!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}