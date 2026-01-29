import { Optional } from '@nestjs/common';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('float', {
    default: 0,
  })
  price: number;

  @Column({ type: 'text', nullable: true })
  @Optional()
  description?: string;

  @Column({ type: 'text', nullable: true })
  slug: string;

  @Column('int', { default: 0 })
  stock: number;

  @Column('text', { array: true })
  size: string[];

  @Column({ type: 'text', nullable: true })
  @Optional()
  gender?: string;

  @Column({ default: true })
  @Optional()
  active: boolean;

  @BeforeInsert()
  generateSlug() {
    if (!this.slug) {
      this.slug = this.name;
    }

    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
