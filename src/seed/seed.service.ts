import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}
  async runSeed() {
    await this.clearDatabase();
    return 'SEED EXECUTED';
  }

  private async clearDatabase() {
    await this.productsService.deleteAllProducts();

    const products = initialData.products;
    const insertPromise: Promise<any>[] = [];

    products.forEach((product) => {
      insertPromise.push(this.productsService.create(product));
    });
    await Promise.all(insertPromise);

    return true;
  }
}
