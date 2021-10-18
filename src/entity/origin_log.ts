import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import General_Logs from './General_Logs';

@Entity()
export default class origin_logs {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	name!: string;

	@OneToMany(() => General_Logs, (General_Logs) => General_Logs.id_origin_logs)
	@JoinColumn({ name: 'General_Logs' })
	General_Logs?: General_Logs[];
}
