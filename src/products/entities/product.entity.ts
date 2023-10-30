import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

Entity();
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ nullable: false })
  product_name: string;

  @Column({ nullable: false })
  price: string;

  @Column({
    nullable: false,
    type: 'decimal',
    precision: 7,
    scale: 2,
  })
  quantity: number;

  @Column({ nullable: false, type: 'int' })
  category_id: number;

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
