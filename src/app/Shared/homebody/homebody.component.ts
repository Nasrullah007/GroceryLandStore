import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonSrvService } from 'src/app/common-srv.service';
import { ProductdetailstateService } from 'src/app/products/productdetailstate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.css']
})
export class HomebodyComponent implements OnInit {
  AppHome:any;
  error:any;
  UsersAPIURL: any;
  constructor(private route: ActivatedRoute,private http :CommonSrvService,private router: Router, @Optional() private counterStore: ProductdetailstateService) { }

  ngOnInit(): void {
    this.GetAppHomeData();
    debugger;
    this.UsersAPIURL = environment.UsersAPIURL;
  }
  GetAppHomeData() {
    this.http.getNoAuth('api/AppHome/1').subscribe((d: any) => {
      this.AppHome=d;
    }, error => this.error = error // error path
    );
  }
  CalculateDisCount(Discount,price){
   return Math.round((((100-Discount)/100)*price) * 100) / 100
  }
}
