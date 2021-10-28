import { Component, OnInit } from '@angular/core';
import { CommonSrvService } from '../common-srv.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
error:any;


  constructor(private http :CommonSrvService) { }
  
  ngOnInit(): void {
    
    this.GetPriceUnitsList();
  }

  GetPriceUnitsList() {
    
    this.http.getNoAuth('api/AppHome/1').subscribe((d: any) => {
      
    }, error => this.error = error // error path
    );
  }
}
