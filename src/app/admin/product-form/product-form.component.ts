import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit,OnDestroy {
  //categories$;
  categories:any[];
  subscription:Subscription;
    constructor(
      private categoryService:CategoryService,
      private productService:ProductService,
      private router:Router) {

    this.subscription = this.categoryService.getCategories().subscribe(data => {
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
    this.router.navigate(['/admin/products']);
  }

}
