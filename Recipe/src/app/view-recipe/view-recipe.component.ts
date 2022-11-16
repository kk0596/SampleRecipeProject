import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

  constructor(private router: Router) { }
  
  recipeList:any;
  
  ngOnInit(): void {
    
    this.recipeList = [
      {name:'Chicken Briyani',quotes:'Well cooked chicken with seeraga samba...',image:'assets/chickenbriyani.jpg'},
      {name:'Mutton Briyani',quotes:'Well cooked softy mutton with Basmati Rice...',image:'assets/muttonbriyani.png'},
      {name:'Butter Naan',quotes:'Softy butter mixed naan...',image:'assets/butterNaan.jpg'},
      {name:'Chilly Chicken',quotes:'Spicy chicken dry with soft...',image:'assets/chillyChicken.jpg'},
      {name:'Tandoori',quotes:'Served with raitha and onion spring...',image:'assets/tandoorichicken.jpg'},
      {name:'Lemon Mint',quotes:'Lemon mixed with black pepper and ice cubes...',image:'assets/lemon-mint-juice.jpg'},

    ]
  }

  onCategoryClick(){

    this.router.navigateByUrl('/details');
}

}
