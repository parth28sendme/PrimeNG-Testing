import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {


  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  loanData : any[];
  branches : any[];
  selectedBranch :any;
  status : any[]
  statusName : any;
  dialogFields : any[];
  display: boolean = false;
  account: any = {};
  cards2 = ['card', 'card', 'card', 'card', ]; 
  stats :any[];

  constructor(
    private DataService : DataService,
  ) { 

    this.branches = DataService.global.branches;

    this.dialogFields = [
      { name: "id" , label: "Customer ID"},
      { name: "openingDate" ,label: "OpeningDate"},
      { name: "accountNo" ,label: "AccountNo"},
      { name: "accountType" ,label: "AccountType" },
      { name: "branch"  ,label: "Branch"},
      { name: "status"  ,label: "Status"},
      { name: "balance" , label: "Balance"}
      ]
  
    this.status =DataService.loans.status;

    this.loanData = DataService.loans.loanData;
    
    const loanStatusCount = this.loanData.reduce((acc, loan) => {
      const status = loan.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    
    // Transforming into desired structure
    const statusArray = Object.entries(loanStatusCount).map(([status, count]) => ({
      name: status,
      value: count
    }));
    
    console.log(statusArray);
    this.stats = statusArray;
    
    console.log(loanStatusCount);
    

  }
 

  


  
  ngOnInit(): void {
  

  }

  saveAccount() {
    console.log('Account Saved', this.account);
    this.display = false;
  }

  displayDialog(){
    this.display = true;
  }

   exportToExcel(): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.loanData);
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
    
      saveAs(data, 'LoanData.xlsx');
    }
  

    getColor(status: any) {
      switch (status) {
    case 'Rejected':        // Rejected
      return { color: '#FF4D4F', backgroundColor: '#FFF1F0' };
    case 'Approved':       // Approved
      return { color: '#28C76F', backgroundColor: '#F2FBF5' };
    case 'Pending': // In Review
     return { color: '#E5A800', backgroundColor: '#FFFBE6' };
    default:
      return { color: '#6C757D', backgroundColor: '#F8F9FA' }; // N/A / Unknown
  }
  }
  
  

}
