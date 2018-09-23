import { CategoryService } from 'shared/services/category.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit,OnDestroy {

  subscriptionCat: Subscription;
  categories: any[];
  @Input('category')category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.subscriptionCat = this.categoryService.getCategories()
    .subscribe(catData => {
      this.categories = catData;
    })

  }

  ngOnDestroy() {
    this.subscriptionCat.unsubscribe();
  }

}
