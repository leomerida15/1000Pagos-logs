import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import fm_origin_logs from './fm_origin_log';

@Entity()
export class fm_logs {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column()
	descript!: string;

	@Column()
	email!: string;

	@ManyToOne(() => fm_origin_logs, (fm_origin_logs) => fm_origin_logs.logs)
	@JoinColumn({ name: 'id_origin_logs' })
	id_origin_logs!: number;

	@CreateDateColumn()
	createdAt?: string;
}

// `[method:POST]::[path:/new]::[msg:registro de usuario]`;
