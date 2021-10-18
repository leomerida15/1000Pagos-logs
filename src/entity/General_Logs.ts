import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import origin_logs from './origin_log';

@Entity()
export default class General_Logs {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	descript!: string;

	@Column()
	email!: string;

	@ManyToOne(() => origin_logs, (origin_logs) => origin_logs.General_Logs)
	@JoinColumn({ name: 'id_origin_logs' })
	id_origin_logs!: number;

	@CreateDateColumn()
	createdAt?: string;
}

// `[method:POST]::[path:/new]::[msg:registro de usuario]`;
