import { Component, OnInit } from '@angular/core';
import { slideDownFirst, slideUp, slideInRight, slideDownAfter } from "./../../shared/animations";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [slideDownFirst, slideUp, slideInRight, slideDownAfter]

})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
