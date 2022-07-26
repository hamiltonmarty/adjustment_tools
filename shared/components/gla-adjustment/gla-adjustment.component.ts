import { Component, OnInit, Input } from '@angular/core';
import { PropertydataService } from 'src/app/propertydata.service';

@Component({
  selector: 'app-gla-adjustment',
  templateUrl: './gla-adjustment.component.html',
  styleUrls: ['./gla-adjustment.component.scss']
})
export class GlaAdjustmentComponent implements OnInit {

  propertyList: Array<Object>;
  _subjectInfo: any;
  _subjectGLA: any;;
  
  constructor( private propertyDataService: PropertydataService) {}

  ngOnInit(){
    this.propertyDataService.getJSON().subscribe(data => {
      this._subjectInfo = data.VALUATION_RESPONSE.VALUATION_METHODS.SALES_COMPARISON.COMPARABLE_SALE[0];
      console.log(this._subjectInfo);
      this._subjectGLA = this._subjectInfo.SALE_PRICE_ADJUSTMENT[8].__Description;
  })
}
}
