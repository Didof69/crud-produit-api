import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ nullable: false })
  category_name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
