import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDescriptionDetailPageRoutingModule } from './product-description-detail-routing.module';

import { ProductDescriptionDetailPage } from './product-description-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDescriptionDetailPageRoutingModule
  ],
  declarations: [ProductDescriptionDetailPage]
})
export class ProductDescriptionDetailPageModule {}
