import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProducItemsModule } from '../product-item/product-item.module';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent, ProductDetailsComponent],
  imports: [CommonModule, ProducItemsModule, SharedModule, ShopRoutingModule],
})
export class ShopModule {}
