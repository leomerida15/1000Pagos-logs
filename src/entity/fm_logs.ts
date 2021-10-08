import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class fm_logs {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	descript!: string;

	@Column()
	ip!: string;

	@CreateDateColumn()
	createdAt?: string;
}
