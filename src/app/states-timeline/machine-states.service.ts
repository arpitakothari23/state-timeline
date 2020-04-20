import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MachineStatesService {
  data;

  constructor(private httpClient: HttpClient) {

    this.getMachineStates().subscribe(d => {
      this.data = d;
    });
  }

  getMachineStates() {
    return this.httpClient.get('assets/state.json');
  }
}
