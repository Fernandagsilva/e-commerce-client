import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProducItemsModule } from '../product-item/product-item.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ProducItemsModule, SharedModule],
  exports: [ShopComponent],
})
export class ShopModule {}
