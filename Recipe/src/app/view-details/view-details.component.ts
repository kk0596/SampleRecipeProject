import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  public recipeItem:any = {};
  public ingredientList:any;
  public ingredientNanList:any;
  public ingredientMuttonList:any;
  public ingredientLemonMintList:any;
  
    constructor(private route:Router) { }
  
    ngOnInit(): void {
      this.recipeItem = JSON.parse(localStorage.getItem('recipe') || '{}');
      console.log("got item values", this.recipeItem)
      this.ingredientList = [
        {name:'Plain yogurt',quantity:'3 Tbs'},
        {name:'Ginger garlic paste',quantity:'1 & 1/4 Tbs'},
        {name:'Garam masala',quantity:'1/2 to 1 Tbs'},
        {name:'Salt',quantity:'1/2 Tbs'},
        {name:'Turmeric',quantity:'1/4 Tbs'},
        {name:'Red chilli powder',quantity:'1 Tbs'},
        {name:'Lemon juice',quantity:'1 Tbs'},
        {name:'Ghee',quantity:'As per need'},
        {name:'Water',quantity:'As per need'},
        {name:'Cloves',quantity:'4 pcs'},
        {name:'Cardamons',quantity:'4 pcs'},
        {name:'Basmathi rice',quantity:'As per need'},
        {name:'Mint leaves',quantity:'As per need'},
        {name:'Large onion',quantity:'As per need'},
        {name:'Chicken',quantity:'1/2 Kg'},
        {name:'Bay leaf',quantity:'1 leaf'},
        {name:'Star anise',quantity:'1'},
      ]
      this.ingredientMuttonList = [
        {name:'Plain yogurt',quantity:'3 Tbs'},
        {name:'Ginger garlic paste',quantity:'1 & 1/4 Tbs'},
        {name:'Garam masala',quantity:'1/2 to 1 Tbs'},
        {name:'Salt',quantity:'1/2 Tbs'},
        {name:'Turmeric',quantity:'1/4 Tbs'},
        {name:'Red chilli powder',quantity:'1 Tbs'},
        {name:'Lemon juice',quantity:'1 Tbs'},
        {name:'Ghee',quantity:'As per need'},
        {name:'Water',quantity:'As per need'},
        {name:'Cloves',quantity:'4 pcs'},
        {name:'Cardamons',quantity:'4 pcs'},
        {name:'Basmathi rice',quantity:'As per need'},
        {name:'Mint leaves',quantity:'As per need'},
        {name:'Large onion',quantity:'As per need'},
        {name:'Mutton',quantity:'1/2 Kg'},
        {name:'Bay leaf',quantity:'1 leaf'},
        {name:'Star anise',quantity:'1'},
      ]
      this.ingredientNanList = [
        {name:'Maida(Flour)',quantity:'500 g'},
        {name:'Curd',quantity:'50 g'},
        {name:'Baking soda',quantity:'1/4 Tbs'},
        {name:'Sugar',quantity:'1/2 Tsp'},
        {name:'Salt',quantity:'2/3 Tbs'},
        {name:'Oil',quantity:'1 & 1/2 Tbs'},
        {name:'Ghee',quantity:'As per need'},]
    }
    onClickHome(){
      this.route.navigateByUrl("/items")
    }

}
