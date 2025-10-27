import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity() 
export class User {
  @PrimaryGeneratedColumn() // id(기본 키, 자동 증가)
  id: number;

  @Column({ unique: true }) // email
  email: string;

  @Column() 
  password: string;

  @Column() 
  name: string;

  @CreateDateColumn() // 생성 시간 자동 기록
  createdAt: Date;

  @UpdateDateColumn() // 수정 시간 자동 기록
  updatedAt: Date;
}