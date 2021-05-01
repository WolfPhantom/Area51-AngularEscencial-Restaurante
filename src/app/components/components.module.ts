import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishComponent } from './dish/dish.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { VoucherComponent } from './voucher/voucher.component';


@NgModule({
  declarations: [DishComponent, IngredientsComponent, VoucherComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [DishComponent, IngredientsComponent,VoucherComponent]
})
export class ComponentsModule 
{
  constructor(private library: FaIconLibrary) {
    library.addIcons(faPlus);}
}
