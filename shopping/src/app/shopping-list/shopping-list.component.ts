import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Shugar', 3),
    new Ingredient('Floor', 5),
    new Ingredient('Apple', 2),
    new Ingredient('Tomatos', 12),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
