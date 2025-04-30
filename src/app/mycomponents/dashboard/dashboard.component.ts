import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedCity: any;
  selectedCities: any[] = [];
  data: any[] =[];
  pieChartData :any;
  pieChartData2 :any;
  lineChartData : any;
  transactionStatusChart :any;
  transactionTypeData : any;
  lineChartOptions : any;
  cards1 = ['Card 1', 'Card 2',];
  cards2 = ['Card 1', 'Card 2',  'Card 3' ];

  constructor() { 

  
    this.transactionTypeData = {
      labels: ['UPI', 'NEFT', 'RTGS', 'IMPS', 'Cash'],
      datasets: [
        {
          data: [460, 320, 180, 250, 90],
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6', '#678D99', '#3B6978'],
          hoverBackgroundColor: ['#2A4D56', '#1A2A35', '#D9E4E6', '#4C6B74', '#2A4D56']
        }
      ]
    };
    

 
    
    
    
    

    
  }


  
  ngOnInit(): void {

    this.lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Monthly Transactions',
          data: [10200, 11850, 12500, 11300, 14000, 13850, 14500, 14900, 13500, 14200, 10000, 6800],
          fill: false,
          borderColor: '#3B6978',
          tension: 0.4
        }
      ]
    };
    
    this.lineChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Monthly Transaction Volume'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
    


    this.transactionStatusChart = {
      labels: ['Completed', 'Pending', 'Failed'],
      datasets: [
        {
          
          data: [150000, 7000, 9000], // Example transaction counts
          backgroundColor: ['#3B6978', '#204051', '#D9E4E6']
        }
      ]
    };
    

  }

  

}
