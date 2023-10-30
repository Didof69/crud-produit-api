import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ nullable: false })
  user_name: string;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
