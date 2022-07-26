import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertydataService } from 'src/app/propertydata.service';

@Component({
  selector: 'app-gla-adjustment',
  templateUrl: './gla-adjustment.component.html',
  styleUrls: ['./gla-adjustment.component.scss']
})
export class GlaAdjustmentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  comps: [];

  dtTrigger: any;

  // private sorted = false;
  constructor(
    private propertyDataService: PropertydataService) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.propertyDataService.getJSON().subscribe(data => {
      this.comps = data;
      this.dtTrigger.next();
    })

  }

}
