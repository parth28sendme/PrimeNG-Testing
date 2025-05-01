import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  complaintsData : any[];
  priorityList : any[];
  priority :any;
  supportTeam : any;
  supportTeamList : any[];
  constructor(
    private DataService : DataService
  ) { 

    this.supportTeamList = DataService.complaints.supportTeamList;
    this.priorityList = DataService.complaints.priorityList;
    this.complaintsData =DataService.complaints.complaintsData;



  }


  
  ngOnInit(): void {
  

  }

}
