import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { fm_logs } from './fm_logs';

@Entity()
export default class fm_origin_logs {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;

	@OneToMany(() => fm_logs, (fm_logs) => fm_logs.id_origin_logs)
	@JoinColumn({ name: 'id_type_log' })
	logs?: fm_logs[];
}
