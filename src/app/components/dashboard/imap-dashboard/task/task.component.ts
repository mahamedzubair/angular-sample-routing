import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../services/data/data.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  header: string[];
  data: any = [];
  title = 'sample';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().pipe().subscribe(res => {
      this.header = Object.keys(res.TASK_KPI[0]);
      this.header.splice(this.header.indexOf("TYPES"), 1);
      let childHeaders = Object.keys(res.TASK_KPI[0].TYPES[0].APPROVE);
      this.header.splice(1, 0, "");
      this.header.splice(2, 0, ...childHeaders);
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
