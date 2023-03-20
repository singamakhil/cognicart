import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDummyService } from '../product/product-dummy.service';
import { Product } from '../product/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(
    private store: Store<AppState>,
    private productService: ProductDummyService
  ) {
    this.products$ = this.productService.getDynamicProducts();
  }
  
  ngOnInit() {
  }
}
