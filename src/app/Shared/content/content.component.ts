import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonSrvService } from 'src/app/common-srv.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  error:any;
  Categories:any;
  query: string = "";
  SubCategoriesTemp=[] ;
  constructor(private http :CommonSrvService,private router:Router) { }
  ngOnInit() {
    this.GetCategorirsList();
  }
  GetCategorirsList() {
    this.http.getNoAuth('api/category/1').subscribe((d: any) => {
      this.Categories=d;
      this.Categories= this.Categories.filter(item => item.ParentId == null);
        for (let index = 0; index < this.Categories.length; index++) {
          this.SubCategoriesTemp=d.filter(item2 => item2.ParentId == this.Categories[index].CategoryId);
          Object.assign(this.Categories[index],{Key: this.SubCategoriesTemp})
        }
    }, error => this.error = error // error path
    );
  }
    reloadComponent(CategoryId) {
      debugger;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/Products'], { queryParams: { Catid: CategoryId } });
    }
}
