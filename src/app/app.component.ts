import { Component, OnInit } from '@angular/core';
import { StatesTimelineComponent } from './states-timeline/states-timeline.component';
import { MatDialog } from '@angular/material/dialog';
import { MachineStatesService } from './states-timeline/machine-states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'states-timeline';
  machineStatesData;
  constructor(public dialog: MatDialog, private machineStatesService: MachineStatesService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(StatesTimelineComponent, {
        width: '80%',
        height: 'auto',
          data: { machineName: 'filler', stateName: 'updt'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.machineStatesService.getMachineStates().subscribe((data) => {
      this.machineStatesData = data;
      console.log(this.machineStatesData);
    });
  }
}
