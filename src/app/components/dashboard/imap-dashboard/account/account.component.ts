import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../services/data/data.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  header: any[];
  data: any = [];
  title = 'sample';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().pipe().subscribe(res => {
      this.header = [{
        key: 'taskType', label: 'TASKS',

      }, {
        key: 'taskType', label: 'TASKS',

      }, {
        key: 'frequency', label: 'FREQUENCY',

      }, {
        key: 'total', label: 'TOTAL',

      }, {
        key: 'slaMissed', label: 'SLA_MISSES_NO',

      }, {
        key: 'slaMet', label: 'SLA_MISSED_PER',

      }];
      this.data = res;
    });
  }

  colIndexList(i) {
    return i === 0 || i === 4 || i === 5;
  }

  getKeyObject(type) {
    let key = Object.keys(type);
    return key;
  }

}
