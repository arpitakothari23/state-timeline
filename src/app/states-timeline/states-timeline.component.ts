import { Component, OnInit, Inject } from '@angular/core';
import { MachineStatesService } from './machine-states.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-states-timeline',
  templateUrl: './states-timeline.component.html',
  styleUrls: ['./states-timeline.component.scss']
})
export class StatesTimelineComponent implements OnInit {
  

  data;
  states ;
  activeLink;
  activeLinkData;
  selectedData;
  isHidden: boolean = true;
  slotTime=[
    {"start" : "",
    "sid":"",
    "end" : "",
    "eid":""
    }
  ]
  minDate : Date;
  maxDate : Date;
  minn : any;
  maxx:any;
  causes: any;

 
  constructor(
    private machineStatesService: MachineStatesService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) { }



  ngOnInit(): void {
    this.data = this.machineStatesService.data;
    this.states = Object.keys(this.machineStatesService.data.states);
    // this.activeLink = this.states[0];
    // console.log(this.dialogData);
    this.activeLink = this.dialogData.stateName;
    //console.log(this.activeLink)
    this.activeLinkData = this.data.states[this.activeLink];
    //console.log(this.states);
    this.states = [this.activeLink , ...this.states.filter(i => i !== this.activeLink) ];
    // console.log(this.states);
    // console.log(this.data);
    this.causes = this.data.causes;
    console.log(this.causes)
  }

  onNoClick() {

  }



  onSelection(t) {
    this.selectedData = t;
    console.log(this.selectedData);

    let startdate = new Date(this.selectedData.start_time)
    let enddate = new Date(this.selectedData.end_time)


    
    this.minn = startdate.getHours() + ":" + startdate.getMinutes();
    this.maxx = enddate.getHours() + ":" + enddate.getMinutes();

    // this.minn=startdate;
    // this.maxx=enddate;
    let obj = { "start" : this.minn,
      "sid":  "timepicker"+Math.floor((Math.random() * 100) +1),
      "end" : this.maxx,
      "eid":  "timepicker"+Math.floor((Math.random() * 100) +1)
      };
    this.slotTime.push(obj);
    
    console.log(enddate, startdate);
   
    console.log(this.minn, this.maxx);
  }

  splitTime(k){
   
    let obj ={ "start" : this.minn,
    "sid":  "timepicker"+Math.floor((Math.random() * 100) +1),
    "end" : k,
    "eid":  "timepicker"+Math.floor((Math.random() * 100) +1)
    };
    this.slotTime.push(obj);

    obj ={ "start" : k,
    "sid":  "timepicker"+Math.floor((Math.random() * 100) +1),
    "end" : this.maxx,
    "eid":  "timepicker"+Math.floor((Math.random() * 100) +1)
    };
    this.slotTime.push(obj);
    console.log(k,obj)
  }

  
  getActiveLinkDate(state) {
    this.activeLink = state;
    this.activeLinkData = this.data.states[this.activeLink];
    this.selectedData = null;
    console.log(this.activeLink)
  }



  

}
