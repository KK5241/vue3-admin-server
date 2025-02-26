import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    comment: '角色名称 唯一',
  })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '说明描述' })
  description: string;

  @Column({ type: 'int', default: 1, comment: '默认角色 1是 0不是' })
  isDefault: number;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updatedAt: Date;
}
