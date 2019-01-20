import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../services/data/data.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  header: any[];
  data: any = [];
  title = 'sample';
  selectedTask = 'approvereject';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTasks()
  }

  getTasks(list?) {
    this.selectedTask = list && list.target && list.target.value ? list.target.value : 'approvereject';
    if(this.selectedTask === 'autoapprove') {
      this.header = [{
        key: 'processType', label: 'PROCESS TYPE',

      }, {
        key: 'requestorGroup', label: 'Requestor Group',

      }, {
        key: 'frequency', label: 'FREQUENCY',

      }, {
        key: 'total', label: 'TOTAL',

      }, {
        key: 'totalSuccess', label: 'TOTAL SUCCESS',

      }, {
        key: 'totalFailure', label: 'TOTAL FAILURE',

      }];
    } else {
      this.header = [{
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

    }
    this.dataService.getData(this.selectedTask).pipe().subscribe(res => {
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
