import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDescriptionDetailPage } from './product-description-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDescriptionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDescriptionDetailPageRoutingModule {}
