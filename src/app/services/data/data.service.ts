import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiService } from '../api.service';

@Injectable({
	providedIn: 'root',
})

export class DataService {
    constructor(private api: ApiService) { }
    getData(): Observable<any> {
        return this.api.get("./assets/data/data.json").pipe(response => response);
    }

}