import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
// import jsonData from '../../assets/dishes.json';
// import { dishes as jsonDishes } from '../../assets/dishes.json';
import { jsonDishes } from '../../assets/dishes.json';


@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  @Input()selectDish: Dish []=[]
  constructor() {}

  ngOnInit(): void {
    this.dishes = [...jsonDishes];
  }
  getClass(dish: Dish): object
  {
    console.log(dish.available ?? 'warning');
    return {available: dish.available};
  }
  getStyles(dish: Dish): object
  {
    return {backgroundColor: (dish.available ? 'green' : 'red')};
  }
  addDish(dish: Dish): void
  { 
    this.selectDish.push(dish);
    console.log(this.selectDish);
  }
}
