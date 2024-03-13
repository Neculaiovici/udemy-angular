import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Omleta cu sunca', 'Are oua sunca, bulion, carne tot ce vrei tu', 'https://www.slobodenpecat.mk/wp-content/uploads/2023/08/%D0%BF%D0%B5%D1%87%D0%B5%D0%BD-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%87%D1%83%D0%BA-%D1%81%D0%BE-%D1%98%D0%B0%D1%98%D1%86%D0%B0-%D0%A4%D0%BE%D1%82%D0%BE-therecipestuff-in.jpg'),
    new Recipe('Salata Creveti', 'Are salata si creveti cu de toate', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
