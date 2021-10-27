import { Injectable } from "@angular/core";
import { NgSimpleStateBaseStore } from "ng-simple-state";
import { Observable } from "rxjs";

export interface CounterState {
  productData: any;
}
@Injectable({
  providedIn: 'root',
})
export class ProductdetailstateService extends NgSimpleStateBaseStore<CounterState> {
  initialState(): CounterState {
    return {
      productData:null
    };
  }
  decrement(Data){
    this.setState(state => ({ productData: state.productData}));
  }
  getdata(): Observable<any> {
    return this.selectState(state => state.productData);
  }
}
