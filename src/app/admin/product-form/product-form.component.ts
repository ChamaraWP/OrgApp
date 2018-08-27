import { ProductService } from './../../services/product.service';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from './../../category.service';
import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit,OnDestroy {
  //categories$;
  categories:any[];
  subscription:Subscription;
    constructor(categoryService:CategoryService,private productService:ProductService) {
    this.subscription = categoryService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data);

    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save(product) {
    console.log(product);
    this.productService.create(product);
  }

}
