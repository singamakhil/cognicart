import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//import { initCart } from './app.actions';
import { AppState } from './root-store/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CogniShop';

  constructor(
    // private store: Store<AppState>
    ) {
  }

  ngOnInit() {
//    this.store.dispatch(initCart());
  }
}
