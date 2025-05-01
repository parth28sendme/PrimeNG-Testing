import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  selectedBranch: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  lineChartData : any;
  branches: any[];
  statusName: any;
  status : any[];
  accountData : any[];
  accountTypeList : any[];
  accountType : any;
  display: boolean = false;
  dialogFields : any[];
  account: any = {};

  constructor(
    private DataService : DataService,
  ) {   
        this.branches = DataService.global.branches;
        this.accountData = DataService.accounts.accountData;
        this.accountTypeList = DataService.accounts.accountTypeList;
        this.status = DataService.accounts.status;
        this.dialogFields = DataService.accounts.dialogFields;
      }


  
  ngOnInit(): void {

  }
  saveAccount() {
    console.log('Account Saved', this.account);
    this.display = false;
  }

  displayDialog() {
    this.display = true;
  }
  
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.accountData);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Account Data': worksheet },
      SheetNames: ['Account Data']
    };
  
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });
  
    const data: Blob = new Blob([excelBuffer], {
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
  
    saveAs(data, 'AccountData.xlsx');
  }

  
  getColor(percentage: any) {
    if (percentage === "Active") {
      return '#5cb89e'; // Gentle green
    } else if (percentage === "Frozen") {
      return '#dda45a'; // Warm orange
    } else {
      return '#d46b6b'; // Muted red
    }
  }
  
  
  


  
}
