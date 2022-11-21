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
  public ingredientChilliChickenList:any;
  public ingredientTandooriList:any;
  
  public processList:any;
    constructor(private route:Router) { }
  
    ngOnInit(): void {
      this.recipeItem = JSON.parse(localStorage.getItem('recipe') || '{}');
      console.log("got item values", this.recipeItem);

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
        {name:'Star anise',quantity:'1'}
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
        {name:'Star anise',quantity:'1'}
      ]
      this.ingredientNanList = [
        {name:'Maida(Flour)',quantity:'500 g'},
        {name:'Curd',quantity:'50 g'},
        {name:'Baking soda',quantity:'1/4 Tbs'},
        {name:'Sugar',quantity:'1/2 Tsp'},
        {name:'Salt',quantity:'2/3 Tbs'},
        {name:'Oil',quantity:'1 & 1/2 Tbs'},
        {name:'Ghee',quantity:'As per need'}
      ]
      this.ingredientLemonMintList = [
        {name:'Mint leaves(pudina)',quantity:'As per need'},
        {name:'Lemon juice',quantity:'1/4 cup'},
        {name:'black pepper powder (kalimirch)',quantity:'1/4 Tbs'},
        {name:'Sugar',quantity:'1/2 Tsp'},
        {name:'Salt',quantity:'2/3 Tbs'},
        {name:'Ice cubes',quantity:'1 cup'},
        {name:'Cold water',quantity:'2 glasses'}
      ]
      this.ingredientChilliChickenList = [
        {name:'Chicken breasts',quantity:'As per need'},
        {name:'Lemon juice',quantity:'1/4 cup'},
        {name:'Pepper',quantity:'1/2 Tbs'},
        {name:'Egg',quantity:'1'},
        {name:'Salt',quantity:'2/3 Tbs'},
        {name:'Green pepper',quantity:'As per need'},
        {name:'Red pepper',quantity:'As per need'},
        {name:'Garlic Cloves',quantity:'3'},
        {name:'Soya Sauce',quantity:'3 Tbs'},
        {name:'Rice',quantity:'As per need'}
      ]

        this.ingredientTandooriList = [
        {name:'Chicken(Bone-in)',quantity:'1/2 kg'},
        {name:'Yogurt',quantity:' 1 cup'},
        {name:'Spices',quantity:'As per need'},
        {name:'Ginger',quantity:'2 tps'},
        {name:'Garlic',quantity:'3 tps'},
        {name:'Lemon juice',quantity:'2 tps'}
      ]
    this.processList = {
      process1Step1:'Step 1 Prepare saffron-kewra water and chop veggies To make a delightful chicken biryani dish firstly soak saffron in water to prepare saffron water (One tsp saffron can be soaked in 1/4 cup water). Next, mix kewra drops in water and mix well to make kewra water. Set them aside for later usage. Now chop the onion and coriander leaves and keep them aside',
      process1Step2:'Step 2 Saute the onions Meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough, add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion to it and saute until pink. Now, add chicken into it with slit green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder and green chilli paste. Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it and give a mix. (Make sure the chicken is washed properly and patted dry before adding it to the dish)',
      process1Step3:'Step 3 Cook biryani on low heat for 5-6 minutes<br>&nbsp;&nbsp;Turn the flame to medium again and add garam masala in it along with ginger julienned, coriander and mint leaves. Add kewra water, rose water and saffron water in it. Cook till the chicken is tender. Then add 1 cup cooked rice and spread evenly. Then add saffron water and pour ghee over it. You can now cook the dish without the lid or cover it with a lid to give a dum-effect due to the steam formation.',
      process1Step4:'Step 4 Serve hot chicken biryani with your favourite chutney or raita Cook for 15-20 minutes with a closed lid and garnish with 1 tbsp fried onions and coriander leaves. Serve hot chicken biryani with raita of your choice. Enjoy!',
      process2Step1:'Filter Maida in any utensil and keep aside. Make a little crater in the middle of the Maida with your hands. Now put curd, baking soda, salt, sugar and oil in the crater and mix these properly with Maida using your hands.',
      process2Step2:'Put little amounts of water at a time in the mixture and knead Maida. You can feel yourself when the kneaded dough turns very soft and smooth. Cover the dough and keep it aside in a warm place for 2 hours allowing it to ferment.',
      process2Step3:'Make 10 equal sized balls of the dough. Take one ball of Maida, apply dry flour and roll into a round circle(5 to 6 inches in diameter). Spread butter/Ghee on it evenly. Fold the rolled Naan into half(forming a semi circle), then again apply butter /Ghee on this folded section.',
      process2Step4:'Now double this fold as it takes the shape of a triangle then apply dry flour to it. Then prepare by rolling it like a parantha on all 3 sides(thinly) and make them ready.',
      process3Step1:'Season the chicken with salt and pepper and cut the chicken into thin strips then coat in the egg wash and flour.Saute the onions Meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough, add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion to it and saute until pink. Now, add chicken into it with slit green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder and green chilli paste. Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it and give a mix.',
      process3Step2:'Shallow fry for a few minutes on each side, until golden brown and add the peppers and fry for another couple of minutes. Remove the chicken and peppers and set aside.',
      process3Step3:'In the same pan, add the garlic, red chilli, soy sauce, tomato purée, and water. Stir and simmer the mixture reduces and is thick and syrupy.',
      process3Step4:'Add back in the chicken and peppers and stir well in the sauce.Serve with rice.',
      process4Step1:' Bone-in Chicken drumsticks are a must for this recipe. De-skin the drumsticks and make 3-4 slits across each drumstick. Whisk together yogurt, ginger garlic paste, lemon juice, and spices to make the marinade.',
      process4Step2:'Apply the yogurt mixture evenly to the chicken legs, cover the bowl and let it marinate in the refrigerator for at least 5-6 hours or up to 24 hours. The longer you marinate the more flavorful the chicken will be.',
      process4Step3:'Take the marinated chicken out of the refrigerator 30 minutes prior to grilling. Baste the chicken with mustard oil (or any cooking oil) and arrange it on a grilling pan or on the outdoor grill.',
      process4Step4:'Grill it on an outdoor grill for 20 mins.Yes! bake it at 450 F in a preheated oven for 15 mins, followed by 5 minutes of broiling to get some perfectly grilled charred marks.',
      process5Step1:'Take the blender jar to add a cup of fresh mint leaves(pudina).Pour 1/4 cup of lemon juice.',
      process5Step2:'Add 1/4 spoon of black pepper.Add 1/4 spoon of salt.Add a cup of sugar. Can add honey instead of sugar.',
      process5Step3:'Add a cup of ice cubes.Pour 2 glass of cold water.Blend all the ingredients till it turns smooth juice.',
      process5Step4:'Mix well and add ice cubes and enjoy!!'
    }
    }

    onClickHome(){
    this.route.navigateByUrl("/main")
  }

  getData(){
    let sample_data:[] = [];
    this.loadData(sample_data);
  }

  loadData(addReceipe:any){
     this.ingredientList = [...this.ingredientList, ...addReceipe];
     this.ingredientMuttonList  = [...this.ingredientMuttonList, ...addReceipe];
      this.ingredientNanList  = [...this.ingredientNanList, ...addReceipe];
      this.ingredientLemonMintList  = [...this.ingredientLemonMintList, ...addReceipe];
      this.ingredientChilliChickenList  = [...this.ingredientChilliChickenList, ...addReceipe];
      this.ingredientTandooriList  = [...this.ingredientTandooriList, ...addReceipe];
  }

  addTable() {
    const obj = {
      name: ' Fried onion',
      quantity: '1 cub'
    }
    const obj2 = {
      name: ' Fried onion',
      quantity: '1 cub'
    }
    const obj3 = {
      name: ' Butter ',
      quantity: '100 g'
    }
    const obj4 = {
      name: ' Ghee ',
      quantity: '50 g'
    }
    const obj5 ={
      name: 'Soya Sauce',
      quantity: '1.5 tps'
    }
    const obj6 ={
      name: 'Honey',
      quantity: '2 tps'
    }
    
    this.ingredientList.push(obj);
    this.ingredientMuttonList.push(obj2);
    this.ingredientNanList.push(obj3);
    this.ingredientChilliChickenList.push(obj4);
    this.ingredientTandooriList.push(obj5);
    this.ingredientLemonMintList.push(obj6);
    
  }
  
  
  deleteRow(x:any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.ingredientList.splice(x,1);
      this.ingredientMuttonList.splice(x,1);
      this.ingredientNanList.splice(x,1);
      this.ingredientLemonMintList.splice(x,1);
      this.ingredientChilliChickenList.splice(x,1);
      this.ingredientTandooriList.splice(x, 1 );
    }
  }

}
