import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgSimpleStateBaseStore } from "ng-simple-state";
import { Observable } from "rxjs";
import { ProductdetailstateService } from './productdetailstate.service';
import { CommonSrvService } from '../common-srv.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  error: any;
  UsersAPIURL: any;
  ProductsByCat: any;
  constructor(private router: Router, private route: ActivatedRoute, private http: CommonSrvService) { }
  ngOnInit(): void {
    this.UsersAPIURL = environment.UsersAPIURL;
    this.GetCategorirsList();
  }
  GetCategorirsList() {
    var CatId = this.route.snapshot.queryParamMap.get('Catid');
    this.http.getNoAuth('api/Product/' + CatId).subscribe((d: any) => {
      this.ProductsByCat = d;
    }, error => this.error = error // error path
    );
  }
}
