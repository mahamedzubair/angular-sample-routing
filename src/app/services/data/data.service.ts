import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '../api.service';

@Injectable({
	providedIn: 'root',
})

export class DataService {
    constructor(private api: ApiService) { }
    getData(query?): Observable<any> {
        let url = `http://ecpappdev03:8080/ImapDashboardService/tasks/${query}`
        return this.api.get(url).pipe(response => response);
    }

}