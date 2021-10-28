import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonSrvService } from 'src/app/common-srv.service';
import { environment } from 'src/environments/environment';
import { ProductdetailstateService } from '../productdetailstate.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public Product$: Observable<number>;
  error:any;
  UsersAPIURL: any;
  ProductsDescription:any;
  constructor(private route: ActivatedRoute,private http :CommonSrvService,private _router: Router,@Optional() public srvprod: ProductdetailstateService) {
    debugger;
    this.Product$ = this.srvprod.getdata();
   }
  ngOnInit(): void {
    this.UsersAPIURL = environment.UsersAPIURL;
    this.GetProductDes();
  }
  GetProductDes() {
    debugger;
    var Prodid = this.route.snapshot.queryParamMap.get('Prodid');
    this.http.getNoAuth('api/Product/description/41539').subscribe((d: any) => {
      this.ProductsDescription=d;
    }, error => this.error = error // error path
    );
  }
}
