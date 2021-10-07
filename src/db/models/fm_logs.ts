import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class fm_logs {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	ip!: string;

	@Column()
	description!: string;

	@CreateDateColumn()
	createdAt?: string;
}
