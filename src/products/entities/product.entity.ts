import { Optional } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('numeric', {
    default: 0,
  })
  price: number;

  @Column({ type: 'text', nullable: true })
  @Optional()
  description?: string;

  @Column({ type: 'text', unique: true })
  slug: string;

  @Column('int', { default: 0 })
  stock: number;

  @Column('text', { array: true })
  size: string[];

  @Column('boolean', { default: true })
  active: boolean;
}
