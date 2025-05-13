import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


  cardData : any[]

  constructor() { 

    this.cardData =[
      {
      customerId: 'CUST001',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA1234567890',
        accountType: 'Savings',
        balance: 25000,
        status: 'Active',
        openingDate: '2022-06-15',
        createdBy: 'EMP102',
        lastUpdated: '2025-04-20T10:30:00Z'
      },
      cardData: {
        cardNumber: '4539 1488 0343 6467',
        validFrom: '2023-01-01',
        validTill: '2028-01-01',
        dateOfIssue: '2023-01-01',
        pin: '1234',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '123',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST002',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA2234567891',
        accountType: 'Current',
        balance: 150000,
        status: 'Active',
        openingDate: '2021-04-10',
        createdBy: 'EMP104',
        lastUpdated: '2025-04-22T12:45:00Z'
      },
      cardData: {
        cardNumber: '4716 1234 5678 9012',
        validFrom: '2022-05-01',
        validTill: '2027-05-01',
        dateOfIssue: '2022-05-01',
        pin: '5678',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '456',
        cardStatus: 'Active',
        dailyLimit: 100000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST003',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA3234567892',
        accountType: 'Savings',
        balance: 75000,
        status: 'Closed',
        openingDate: '2020-01-20',
        createdBy: 'EMP105',
        lastUpdated: '2025-04-18T08:15:00Z'
      },
      cardData: {
        cardNumber: '6011 1234 5678 9012',
        validFrom: '2021-07-01',
        validTill: '2026-07-01',
        dateOfIssue: '2021-07-01',
        pin: '9876',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '789',
        cardStatus: 'Blocked',
        dailyLimit: 25000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST004',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA4234567893',
        accountType: 'Current',
        balance: 50000,
        status: 'Frozen',
        openingDate: '2019-11-05',
        createdBy: 'EMP106',
        lastUpdated: '2025-04-19T15:00:00Z'
      },
      cardData: {
        cardNumber: '3530 1113 3330 0000',
        validFrom: '2020-10-01',
        validTill: '2025-10-01',
        dateOfIssue: '2020-10-01',
        pin: '1122',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '321',
        cardStatus: 'Expired',
        dailyLimit: 75000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST005',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA5234567894',
        accountType: 'Savings',
        balance: 42000,
        status: 'Active',
        openingDate: '2022-08-12',
        createdBy: 'EMP107',
        lastUpdated: '2025-04-23T09:00:00Z'
      },
      cardData: {
        cardNumber: '5105 1051 0510 5100',
        validFrom: '2023-03-01',
        validTill: '2028-03-01',
        dateOfIssue: '2023-03-01',
        pin: '3344',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '654',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST006',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA6234567895',
        accountType: 'Current',
        balance: 90000,
        status: 'Active',
        openingDate: '2021-03-14',
        createdBy: 'EMP108',
        lastUpdated: '2025-04-25T11:30:00Z'
      },
      cardData: {
        cardNumber: '4111 1111 1111 1111',
        validFrom: '2021-06-01',
        validTill: '2026-06-01',
        dateOfIssue: '2021-06-01',
        pin: '7788',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '147',
        cardStatus: 'Active',
        dailyLimit: 80000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST007',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA7234567896',
        accountType: 'Savings',
        balance: 31000,
        status: 'Active',
        openingDate: '2020-09-25',
        createdBy: 'EMP109',
        lastUpdated: '2025-04-21T14:00:00Z'
      },
      cardData: {
        cardNumber: '5500 0000 0000 0004',
        validFrom: '2020-12-01',
        validTill: '2025-12-01',
        dateOfIssue: '2020-12-01',
        pin: '5566',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '963',
        cardStatus: 'Blocked',
        dailyLimit: 30000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST008',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA8234567897',
        accountType: 'Current',
        balance: 112000,
        status: 'Active',
        openingDate: '2019-07-07',
        createdBy: 'EMP110',
        lastUpdated: '2025-04-20T17:20:00Z'
      },
      cardData: {
        cardNumber: '3782 822463 10005',
        validFrom: '2021-08-01',
        validTill: '2026-08-01',
        dateOfIssue: '2021-08-01',
        pin: '8899',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '852',
        cardStatus: 'Active',
        dailyLimit: 120000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST009',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA9234567898',
        accountType: 'Savings',
        balance: 58000,
        status: 'Frozen',
        openingDate: '2021-01-05',
        createdBy: 'EMP111',
        lastUpdated: '2025-04-19T13:10:00Z'
      },
      cardData: {
        cardNumber: '6011 0009 9013 9424',
        validFrom: '2022-02-01',
        validTill: '2027-02-01',
        dateOfIssue: '2022-02-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '951',
        cardStatus: 'Active',
        dailyLimit: 40000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST010',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA1023456789',
        accountType: 'Current',
        balance: 135000,
        status: 'Active',
        openingDate: '2020-05-19',
        createdBy: 'EMP112',
        lastUpdated: '2025-04-18T12:00:00Z'
      },
      cardData: {
        cardNumber: '3056 9309 0259 04',
        validFrom: '2020-10-01',
        validTill: '2025-10-01',
        dateOfIssue: '2020-10-01',
        pin: '5566',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '159',
        cardStatus: 'Expired',
        dailyLimit: 50000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST011',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA1123456790',
        accountType: 'Savings',
        balance: 68000,
        status: 'Active',
        openingDate: '2022-11-11',
        createdBy: 'EMP113',
        lastUpdated: '2025-04-23T10:15:00Z'
      },
      cardData: {
        cardNumber: '3530 1113 3330 0000',
        validFrom: '2023-01-01',
        validTill: '2028-01-01',
        dateOfIssue: '2023-01-01',
        pin: '7788',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '789',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST012',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA1223456791',
        accountType: 'Current',
        balance: 40000,
        status: 'Active',
        openingDate: '2021-02-22',
        createdBy: 'EMP114',
        lastUpdated: '2025-04-24T13:25:00Z'
      },
      cardData: {
        cardNumber: '4000 0566 5566 5556',
        validFrom: '2021-05-01',
        validTill: '2026-05-01',
        dateOfIssue: '2021-05-01',
        pin: '3344',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '357',
        cardStatus: 'Active',
        dailyLimit: 70000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST013',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA1323456792',
        accountType: 'Savings',
        balance: 21000,
        status: 'Active',
        openingDate: '2020-12-31',
        createdBy: 'EMP115',
        lastUpdated: '2025-04-26T08:00:00Z'
      },
      cardData: {
        cardNumber: '6011 6011 6011 6611',
        validFrom: '2021-01-01',
        validTill: '2026-01-01',
        dateOfIssue: '2021-01-01',
        pin: '9988',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '468',
        cardStatus: 'Blocked',
        dailyLimit: 20000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST014',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA1423456793',
        accountType: 'Current',
        balance: 145000,
        status: 'Frozen',
        openingDate: '2018-08-20',
        createdBy: 'EMP116',
        lastUpdated: '2025-04-21T15:30:00Z'
      },
      cardData: {
        cardNumber: '6011 1234 5678 9012',
        validFrom: '2020-03-01',
        validTill: '2025-03-01',
        dateOfIssue: '2020-03-01',
        pin: '4455',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '753',
        cardStatus: 'Active',
        dailyLimit: 95000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST015',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA1523456794',
        accountType: 'Savings',
        balance: 33000,
        status: 'Active',
        openingDate: '2023-01-01',
        createdBy: 'EMP117',
        lastUpdated: '2025-04-22T16:40:00Z'
      },
      cardData: {
        cardNumber: '4000 3333 4444 5555',
        validFrom: '2023-02-01',
        validTill: '2028-02-01',
        dateOfIssue: '2023-02-01',
        pin: '7766',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '654',
        cardStatus: 'Active',
        dailyLimit: 45000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST016',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA1623456795',
        accountType: 'Current',
        balance: 117000,
        status: 'Closed',
        openingDate: '2019-09-15',
        createdBy: 'EMP118',
        lastUpdated: '2025-04-20T09:30:00Z'
      },
      cardData: {
        cardNumber: '5555 6666 7777 8888',
        validFrom: '2020-12-01',
        validTill: '2025-12-01',
        dateOfIssue: '2020-12-01',
        pin: '2233',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '852',
        cardStatus: 'Expired',
        dailyLimit: 60000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST017',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA1723456796',
        accountType: 'Savings',
        balance: 22000,
        status: 'Active',
        openingDate: '2021-04-10',
        createdBy: 'EMP119',
        lastUpdated: '2025-04-18T16:30:00Z'
      },
      cardData: {
        cardNumber: '3530 1113 3330 0001',
        validFrom: '2021-04-01',
        validTill: '2026-04-01',
        dateOfIssue: '2021-04-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '358',
        cardStatus: 'Active',
        dailyLimit: 35000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST018',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA1823456797',
        accountType: 'Current',
        balance: 76000,
        status: 'Frozen',
        openingDate: '2020-06-28',
        createdBy: 'EMP120',
        lastUpdated: '2025-04-24T15:00:00Z'
      },
      cardData: {
        cardNumber: '4100 0010 0100 0100',
        validFrom: '2021-09-01',
        validTill: '2026-09-01',
        dateOfIssue: '2021-09-01',
        pin: '1122',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '963',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST019',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA1923456798',
        accountType: 'Savings',
        balance: 54000,
        status: 'Closed',
        openingDate: '2021-12-15',
        createdBy: 'EMP121',
        lastUpdated: '2025-04-25T17:10:00Z'
      },
      cardData: {
        cardNumber: '4222 1222 1234 5678',
        validFrom: '2022-05-01',
        validTill: '2027-05-01',
        dateOfIssue: '2022-05-01',
        pin: '4455',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '741',
        cardStatus: 'Blocked',
        dailyLimit: 65000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST020',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA2023456799',
        accountType: 'Current',
        balance: 130000,
        status: 'Active',
        openingDate: '2018-02-05',
        createdBy: 'EMP122',
        lastUpdated: '2025-04-27T13:40:00Z'
      },
      cardData: {
        cardNumber: '5500 1111 2222 3333',
        validFrom: '2019-11-01',
        validTill: '2024-11-01',
        dateOfIssue: '2019-11-01',
        pin: '5566',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '369',
        cardStatus: 'Expired',
        dailyLimit: 90000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST021',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA2123456800',
        accountType: 'Savings',
        balance: 9000,
        status: 'Active',
        openingDate: '2022-06-06',
        createdBy: 'EMP123',
        lastUpdated: '2025-04-23T14:00:00Z'
      },
      cardData: {
        cardNumber: '5019 0019 0019 0019',
        validFrom: '2022-07-01',
        validTill: '2027-07-01',
        dateOfIssue: '2022-07-01',
        pin: '2233',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '128',
        cardStatus: 'Active',
        dailyLimit: 25000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST022',
      branch: 'Chennai Branch',
      accountData: {
        accountNumber: 'BA2223456801',
        accountType: 'Current',
        balance: 50000,
        status: 'Frozen',
        openingDate: '2020-04-25',
        createdBy: 'EMP124',
        lastUpdated: '2025-04-21T18:50:00Z'
      },
      cardData: {
        cardNumber: '5454 5454 5454 5454',
        validFrom: '2020-05-01',
        validTill: '2025-05-01',
        dateOfIssue: '2020-05-01',
        pin: '4455',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '852',
        cardStatus: 'Active',
        dailyLimit: 80000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST023',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA2323456802',
        accountType: 'Savings',
        balance: 17000,
        status: 'Active',
        openingDate: '2019-11-15',
        createdBy: 'EMP125',
        lastUpdated: '2025-04-26T19:10:00Z'
      },
      cardData: {
        cardNumber: '3411 1111 1111 1112',
        validFrom: '2020-06-01',
        validTill: '2025-06-01',
        dateOfIssue: '2020-06-01',
        pin: '2233',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '903',
        cardStatus: 'Blocked',
        dailyLimit: 35000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST024',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA2423456803',
        accountType: 'Current',
        balance: 67000,
        status: 'Active',
        openingDate: '2021-02-18',
        createdBy: 'EMP126',
        lastUpdated: '2025-04-22T12:50:00Z'
      },
      cardData: {
        cardNumber: '4234 2345 2345 2345',
        validFrom: '2021-04-01',
        validTill: '2026-04-01',
        dateOfIssue: '2021-04-01',
        pin: '8899',
        cardType: 'Credit',
        cardLevel: 'Silver',
        cvv: '231',
        cardStatus: 'Active',
        dailyLimit: 60000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST025',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA2523456804',
        accountType: 'Savings',
        balance: 82000,
        status: 'Frozen',
        openingDate: '2021-05-10',
        createdBy: 'EMP127',
        lastUpdated: '2025-04-23T10:40:00Z'
      },
      cardData: {
        cardNumber: '5500 5555 5555 5555',
        validFrom: '2021-06-01',
        validTill: '2026-06-01',
        dateOfIssue: '2021-06-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '451',
        cardStatus: 'Active',
        dailyLimit: 75000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST026',
      branch: 'Mumbai Main Branch',
      accountData: {
        accountNumber: 'BA2623456805',
        accountType: 'Current',
        balance: 45000,
        status: 'Closed',
        openingDate: '2022-08-12',
        createdBy: 'EMP128',
        lastUpdated: '2025-04-19T09:30:00Z'
      },
      cardData: {
        cardNumber: '6011 1111 1111 3333',
        validFrom: '2022-09-01',
        validTill: '2027-09-01',
        dateOfIssue: '2022-09-01',
        pin: '9988',
        cardType: 'Debit',
        cardLevel: 'Platinum',
        cvv: '762',
        cardStatus: 'Active',
        dailyLimit: 50000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST027',
      branch: 'Delhi Branch',
      accountData: {
        accountNumber: 'BA2723456806',
        accountType: 'Savings',
        balance: 38000,
        status: 'Active',
        openingDate: '2021-07-01',
        createdBy: 'EMP129',
        lastUpdated: '2025-04-22T14:40:00Z'
      },
      cardData: {
        cardNumber: '4111 1234 5678 9012',
        validFrom: '2021-08-01',
        validTill: '2026-08-01',
        dateOfIssue: '2021-08-01',
        pin: '3344',
        cardType: 'Debit',
        cardLevel: 'Gold',
        cvv: '492',
        cardStatus: 'Active',
        dailyLimit: 45000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST028',
      branch: 'Hyderabad Branch',
      accountData: {
        accountNumber: 'BA2823456807',
        accountType: 'Current',
        balance: 85000,
        status: 'Active',
        openingDate: '2020-09-10',
        createdBy: 'EMP130',
        lastUpdated: '2025-04-18T11:20:00Z'
      },
      cardData: {
        cardNumber: '5020 5555 1111 2345',
        validFrom: '2020-10-01',
        validTill: '2025-10-01',
        dateOfIssue: '2020-10-01',
        pin: '5566',
        cardType: 'Credit',
        cardLevel: 'Platinum',
        cvv: '643',
        cardStatus: 'Expired',
        dailyLimit: 100000,
        internationalUsageEnabled: false
      }
    },
    {
      customerId: 'CUST029',
      branch: 'Pune Branch',
      accountData: {
        accountNumber: 'BA2923456808',
        accountType: 'Savings',
        balance: 22000,
        status: 'Frozen',
        openingDate: '2021-12-20',
        createdBy: 'EMP131',
        lastUpdated: '2025-04-24T12:00:00Z'
      },
      cardData: {
        cardNumber: '5454 2222 3333 4444',
        validFrom: '2022-01-01',
        validTill: '2027-01-01',
        dateOfIssue: '2022-01-01',
        pin: '6677',
        cardType: 'Debit',
        cardLevel: 'Silver',
        cvv: '111',
        cardStatus: 'Active',
        dailyLimit: 25000,
        internationalUsageEnabled: true
      }
    },
    {
      customerId: 'CUST030',
      branch: 'Bangalore Branch',
      accountData: {
        accountNumber: 'BA3023456809',
        accountType: 'Current',
        balance: 54000,
        status: 'Active',
        openingDate: '2020-11-10',
        createdBy: 'EMP132',
        lastUpdated: '2025-04-19T13:50:00Z'
      },
      cardData: {
        cardNumber: '3560 1111 2222 3333',
        validFrom: '2021-05-01',
        validTill: '2026-05-01',
        dateOfIssue: '2021-05-01',
        pin: '7788',
        cardType: 'Credit',
        cardLevel: 'Gold',
        cvv: '375',
        cardStatus: 'Active',
        dailyLimit: 70000,
        internationalUsageEnabled: true
      }
    }


    ]
    
    

  }

  ngOnInit(): void {
  }

}


// import {Component,ElementRef,inject, OnInit,Renderer2,} from '@angular/core';
// import { Clipboard } from '@angular/cdk/clipboard';
// import {
//   Chart,
//   registerables
// } from 'chart.js';
// import { CommonModule, formatDate } from '@angular/common';
// import { CalendarModule } from 'primeng/calendar';
// import { InputTextModule } from 'primeng/inputtext';
// import { TableModule } from 'primeng/table';
// import { DialogModule } from 'primeng/dialog';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';
// //import { BotDetectionService } from './bot-detection.service';
// import { BotDetectionService } from '../../Bot-Stop/Bot-Detection/bot-detection.service';
// import { catchError, finalize, takeUntil } from 'rxjs/operators';
// import { Subject, throwError } from 'rxjs';
// import { FormsModule } from '@angular/forms';
// import { ChartModule } from 'primeng/chart';
// import { ChartsComponent } from 'src/app/roles-master/shared/reports/Charts/Charts.component';
// import { RolesIds } from 'src/app/core/enums/RolesIds';
// import { MemberService } from 'src/app/core/services/member.data.service';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { ActivatedRoute } from '@angular/router';
// import { ExclusionService } from '../../Bot-Stop/Exclusion/Exclusion.service';


// @Component({
//   selector: 'app-bot-detection-details',
//   standalone: true,
//   imports: [
//      FormsModule,
//     CommonModule,
//     InputTextModule,
//     TableModule,
//     CalendarModule,
//     DialogModule,
//     ToastModule,
//     ChartModule,
//     MultiSelectModule
//   ],
//   templateUrl: './bot-detection-details.component.html',
//   styleUrl: './bot-detection-details.component.scss'
// })
// export class BotDetectionDetailsComponent {
//  private destroy$ = new Subject<void>();
//    private _service = inject(BotDetectionService);
//   _NetworkGroupService = inject(ActivatedRoute);
//   _messageService = inject(MessageService);
//   _RoleType = inject(RolesIds);
//   _MemberService = inject(MemberService);

//   currentDate: string;

//   RoleId: number = this._MemberService.getRoleID();
//   _BotDetectionChart: any;
//   IsLoading: boolean = false;
//   IsNoDataFound: boolean = false;
//   _BotVisits: any;
//   IsBotDetectionDetails: boolean = false;
//   Datalist: any;
//   DialogHeader: string;
//   CopyBtnName: string = 'Copy';

//   _SelectedDate: any;
//   __TotalCounts: any;
//   __ChartCounts: any;
//   temp__ChartCounts: any;
//   __FinalChartCounts: any;
//   __BotVisitsData: any;
//   __NetworkGroups: any;
//   __Networks: any;
//   _SelectedNetworkGroup: any;
//   _SelectedNetwork
//   percentages: any;

//   Filters: any = {
//     formattedDate: '',
//     NetworkIds: []
//   }

//   // Pagination properties
//   page: number = 1; // Current page
//   itemsPerPage: number = 10; // Items per page
//   totalPages: number = 0; // Total number of pages
//   paginatedData: any[] = []; // Data for the current page

//   constructor(
//     private renderer: Renderer2,
//     private el: ElementRef,
//     private clipboard: Clipboard,
//     private messageService: MessageService
//   ) {
//     Chart.register(...registerables);
//     const today = new Date();
//     this.currentDate = today.toISOString().split('T')[0];
//   }

//   ngOnInit() {
//     this._SelectedDate = [new Date()];
//     this.Filters.formattedDate = formatDate(this._SelectedDate, 'yyyy-MM-dd', 'en-US');
//     this.GetNetworkGroups();
//     this.GetAllPageData();
//     this.IsLoading = true
//   }


//   onDateChange(event: any) {
//     const selectedDate = event.target.value;
//   }
//   // Calculate the total number of pages
//   calculateTotalPages() {
//     this.totalPages = Math.ceil(this.__BotVisitsData?.length / this.itemsPerPage);
//   }

//   // Update paginated data based on the current page
//   updatePaginatedData() {
//     const startIndex = (this.page - 1) * this.itemsPerPage;
//     const endIndex = startIndex + this.itemsPerPage;
//     this.paginatedData = this.__BotVisitsData.slice(startIndex, endIndex);
//     this.paginatedData = this.safeJSONParse(this.paginatedData);
//   }

//   // Navigate to a specific page
//   goToPage(page: number) {
//     if (page >= 1 && page <= this.totalPages) {
//       this.page = page;
//       this.updatePaginatedData();
//     }
//   }

//   // Navigate to the next page
//   nextPage() {
//     if (this.page < this.totalPages) {
//       this.page++;
//       this.updatePaginatedData();
//     }
//   }

//   // Navigate to the previous page
//   previousPage() {
//     if (this.page > 1) {
//       this.page--;
//       this.updatePaginatedData();
//     }
//   }

//   ChangeNetworkGroup() {
//     this.__Networks = this._SelectedNetworkGroup.networks;

//     this.__Networks = [];
//     this._SelectedNetwork = [];
//     let selectednetworkGroups = [];

//     this._SelectedNetworkGroup.forEach(x => {
//       selectednetworkGroups.push(this.__NetworkGroups.find(element => element['value'] == x));
//     });
//     selectednetworkGroups.forEach(networkGroup => {
//       let networks = networkGroup['networks'];
//       networks.forEach(network => {
//         this.__Networks.push(network);
//       });
//     });
//   }

//   currentSortColumn: string | null = null;
//   currentSortOrder: 'asc' | 'desc' = 'asc';
//   activeVisitId: string | null = null; // Tracks the open accordion

//   sortColumn(column: keyof (typeof this.__BotVisitsData)[0]) {
//     // Check if the same column is being sorted; toggle the sort order if true.
//     if (this.currentSortColumn === column) {
//       this.currentSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
//     } else {
//       this.currentSortColumn = column as string;
//       this.currentSortOrder = 'asc';
//     }

//     // Perform the sort operation
//     this.__BotVisitsData.sort((a, b) => {
//       const valueA = a[column];
//       const valueB = b[column];

//       // Handle null/undefined values
//       if (valueA == null && valueB != null)
//         return this.currentSortOrder === 'asc' ? 1 : -1;
//       if (valueB == null && valueA != null)
//         return this.currentSortOrder === 'asc' ? -1 : 1;
//       if (valueA == null && valueB == null) return 0;

//       // Compare numbers
//       if (typeof valueA === 'number' && typeof valueB === 'number') {
//         return this.currentSortOrder === 'asc'
//           ? valueA - valueB
//           : valueB - valueA;
//       }

//       // Compare strings (case-insensitive)
//       if (typeof valueA === 'string' && typeof valueB === 'string') {
//         return this.currentSortOrder === 'asc'
//           ? valueA.localeCompare(valueB)
//           : valueB.localeCompare(valueA);
//       }

//       // Fallback for other data types
//       return 0;
//     });
//   }

//   getSortIcon(column: string): string {
//     if (this.currentSortColumn === column) {
//       return this.currentSortOrder === 'asc'
//         ? 'bi bi-caret-up-fill'
//         : 'bi bi-caret-down-fill';
//     }
//     return '';
//   }

//   btnSearch_Click() {
//     const date = new Date(this._SelectedDate);
//     this.Filters.formattedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
//     this.Filters.NetworkIds = this._SelectedNetwork ?? [];

//     if (this.__Networks != undefined && this._SelectedNetworkGroup != undefined) {
//       if (this.__Networks.length > 0
//         && this._SelectedNetworkGroup.length > 0
//         && this._SelectedNetwork == 0
//       ) {
//         this.Filters.NetworkIds = this.__Networks.map(x => x.value);
//       }
//     }

//     this.GetAllPageData();
//   }

//   btnReset_Click() {
//     this._SelectedDate = [new Date()];
//     this._SelectedNetwork = [];
//     this._SelectedNetworkGroup = [];
//     this.__Networks = [];
//     this.Filters.formattedDate = formatDate(this._SelectedDate, 'yyyy-MM-dd', 'en-US');
//     this.Filters.NetworkIds = [];
//     this.GetAllPageData();
//   }
//   GetNetworkGroups() {
//     if (this.RoleId == this._RoleType.NetworksGroups){
//       this._NetworkGroupService.data.subscribe((data: any) => {
//         const networks = data?.networks || [];
//         this.__NetworkGroups = networks;
//       });
//     }else
//     {
//       this._NetworkGroupService.data.subscribe(data => {
//         this.__NetworkGroups = data.networkGroups;
//       });
//     }
//   }

//   GetAllPageData() {
//     this.IsLoading = true;

//     this._service.GetData(this.Filters).pipe(finalize(() => this.IsLoading = false)
//       , takeUntil(this.destroy$)
//       , catchError((error) => {
//         this.IsLoading = false; // Stop loading if there's an error
//         // You can display an error message or handle it differently here
//         this.IsNoDataFound = false; // Set flag if data is not found
//         return throwError(() => new console.log("API Failed")
//         ); // Re-throw the error
//       })
//     ).subscribe(result => {
//       if (result.body) {

//         const parsedBody = JSON.parse(result.body);
//         console.log("parsing" ,parsedBody);

//         if (result.IsDataNotFound || parsedBody?.data?.length == 0) {
//           // this.IsNoDataFound = true;
//           this.__TotalCounts = result.filteredResponse || [];
//           this.temp__ChartCounts = result.filteredResponse || [];
//           this.__FinalChartCounts = result.filteredResponse || [];
//           this.__BotVisitsData = result.filteredResponse || [];
//           console.log("Bot visits",this.__BotVisitsData)
//           this.percentages = result.filteredResponse || [];
//         }
//         else {
//           this.IsLoading = true;
//           this.IsNoDataFound = false;
//           this.__TotalCounts = parsedBody.data['activityCount'] ?? null;
//           this.temp__ChartCounts = parsedBody.data['badRequestCounts'] ?? null;
//           this.__BotVisitsData = parsedBody.data['bot_visits'] ?? null;
//            console.log("Bot visits",this.__BotVisitsData)
//           this.percentages =
//             this.__TotalCounts && this.__TotalCounts.total > 0
//               ? {
//                   Malicious: (
//                     ((this.__TotalCounts?.Malicious || 0) /
//                       (this.__TotalCounts?.total || 1)) *
//                     100
//                   ).toFixed(2),
//                   Friendly: (
//                     ((this.__TotalCounts?.Friendly || 0) /
//                       (this.__TotalCounts?.total || 1)) *
//                     100
//                   ).toFixed(2),
//                   Human: (
//                     ((this.__TotalCounts?.Human || 0) /
//                       (this.__TotalCounts?.total || 1)) *
//                     100
//                   ).toFixed(2),
//                   total: (
//                     ((this.__TotalCounts?.total || 0) /
//                       (this.__TotalCounts?.total || 1)) *
//                     100
//                   ).toFixed(2),
//                 }
//               : {};
//           this.__ChartCounts = this.transformData(this.temp__ChartCounts);
//           this.processApiResponseHoursWiseData();
//         }
//   }
// }
// );
//   }

//   processApiResponseHoursWiseData() {
//     const apiData = this.__ChartCounts;
//     this.IsLoading = true
    
//     if (!apiData || !apiData.labels || !apiData.datasets) {
//       console.error("Invalid API data format.");
//       this.IsLoading = false;
//       return;
//   }

//     this.__FinalChartCounts = {
//       id: 1,
//       type: 'line',
//       data: {
//         labels: apiData.labels,
//         datasets: apiData.datasets,
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//             display: true,
//             labels: { font: { size: 10 } }
//           },
//           tooltip: {
//             titleFont: { size: 10 },
//             bodyFont: { size: 10 },
//             footerFont: { size: 10 }
//           }
//         },
//         scales: {
//           x: {
//             ticks: { font: { size: 8 } }
//           },
//           y: {
//             ticks: { font: { size: 8 } }
//           }
//         }
//       }
//     };
//     this.IsLoading = false
//   }

// transformData(data: [string, string, number][]) {
//   // Extract unique labels (hours)
//   const labels = [...new Set(data.map((entry) => entry[0]))];

//   // Extract unique bot types
//   const botTypes = [...new Set(data.map((entry) => entry[1]))];

//   // Map datasets for each bot type
//   const datasets = botTypes.map((botType) => {
//     const botData = labels.map((hour) => {
//       const record = data.find(
//         (entry) => entry[0] === hour && entry[1] === botType
//       );
//       return record ? record[2] : 0; // Default to 0 if no record exists
//     });

//     return {
//       label: botType,
//       data: botData,
//       borderColor: this.getColor(botType),
//       backgroundColor: this.getColor(botType), //this.transparentize(this.getColor(botType), 0.5)
//     };
//   });

//   // ➕ Add All Bots (total per hour)
//   const allBotsData = labels.map((hour) => {
//     return botTypes.reduce((sum, botType) => {
//       const record = data.find(
//         (entry) => entry[0] === hour && entry[1] === botType
//       );
//       return sum + (record ? record[2] : 0);
//     }, 0);
//   });

//   datasets.push({
//     label: 'All Bots',
//     data: allBotsData,
//     borderColor: this.getColor('All Bots'),
//     backgroundColor: this.getColor('All Bots'),
//   });

//   return { labels, datasets };
// }


//   getColor(botType: string): string {
//     switch (botType) {
//     case 'Malicious':
//       return this.selectedId == 1 ? '#FA6400' : '#FCD9C1'; // dull orange
//     case 'Friendly':
//       return this.selectedId == 2 ? '#28C76F' : '#CFF3DF'; // dull green
//     case 'Human':
//       return this.selectedId == 3 ? '#A855F7' : '#EBD7FB'; // dull purple
//     case 'All Bots':
//       return this.selectedId == 4 ? '#2F80ED' : '#BFD9FB'; // dull blue
//     default:
//       return 'lightgray'; 
//     }
//   }

//   copyToClipboard(visit: any): void {
//     const visitText = JSON.stringify(visit, null, 2);
//     navigator.clipboard
//       .writeText(visitText)
//       .then(() => {
//         this.CopyBtnName = 'Copied!';
//         this._messageService.add({
//           severity: 'success',
//           summary: 'Success',
//           detail: 'Response copied to clipboard!',
//         });
//       })
//       .catch((err) => {
//         this._messageService.add({
//           severity: 'error',
//           summary: 'Error',
//           detail: 'Failed to copy response to clipboard!',
//         });
//       });
//   }

//   transparentize(color: string, opacity: number): string {
//     return `rgba(${this.hexToRgb(color)}, ${opacity})`;
//   }

//   hexToRgb(hex: string): string {
//     const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//     hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result
//       ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
//           result[3],
//           16
//         )}`
//       : '0, 0, 0';
//   }

//   toggleAccordion(visit: any, event: MouseEvent) {
//     event.stopPropagation(); // Prevent the click from triggering row selection
//     if (this.activeVisitId === visit.requestId) {
//       this.activeVisitId = null; // Close the accordion if it's already open
//     } else {
//       this.activeVisitId = visit.requestId; // Open the accordion for this visit
//     }
//   }

//   isAccordionOpen(visit: any): boolean {
//     this.CopyBtnName = 'Copy';
//     return this.activeVisitId === visit.requestId;

//   }

//   ViewDetails(data: any) {
//     this.Datalist = data;
//     this.DialogHeader = data.bot;
//     this.IsBotDetectionDetails = true;
//   }

//   safeJSONParse(value: any): any {
//     if (typeof value !== 'string') return value; // Return if already an object
//     try {
//       const parsed = JSON.parse(value);
//       return typeof parsed === 'object' ? this.safeJSONParse(parsed) : parsed;
//     } catch {
//       return value; // Return original value if parsing fails
//     }
//   }

//   get formattedJson(): string {
//     return JSON.stringify(this.Datalist, null, 2); // Format JSON with indentation
//   }
//   legendData = [
//   { label: 'Malicious', count: 200, percent: 20, color: '#F44336' }, // red
//   { label: 'Friendly', count: 100, percent: 10, color: '#4CAF50' },  // green
//   { label: 'Human', count: 1000, percent: 70, color: '#9C27B0' }     // purple
// ];

// chartData = {
//   labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
//   datasets: [
//     {
//       label: 'Malicious',
//       data: [15, 20, 18, 25, 30, 28, 22, 26, 30, 24, 20, 18],
//       fill: false,
//       borderColor: '#F44336',
//       tension: 0.4
//     },
//     {
//       label: 'Friendly',
//       data: [10, 12, 14, 13, 12, 15, 14, 13, 12, 10, 11, 12],
//       fill: false,
//       borderColor: '#4CAF50',
//       tension: 0.4
//     },
//     {
//       label: 'Human',
//       data: [100, 120, 150, 160, 140, 180, 170, 175, 190, 200, 210, 180],
//       fill: false,
//       borderColor: '#9C27B0',
//       tension: 0.4
//     }
//   ]
// };

// chartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false
//     }
//   },
//   scales: {
//     y: {
//       beginAtZero: true
//     }
//   }
// };

// searchTerm: string = '';

// botData = [
//   { ip: '123456789', country: 'AE', count: 1 },
//   { ip: '123456789', country: 'AE', count: 4 },
//   { ip: '123456789', country: 'AE', count: 8 },
//   { ip: '123456789', country: 'AE', count: 3 },
//   { ip: '123456789', country: 'AE', count: 2 },
//   { ip: '123456789', country: 'AE', count: 1 },
//   { ip: '123456789', country: 'AE', count: 4 },
//   { ip: '123456789', country: 'AE', count: 8 },
//   { ip: '123456789', country: 'AE', count: 3 },
//   { ip: '123456789', country: 'AE', count: 2 }
// ];

// SelectedBox = {
//   backgroundColor: '#FFF4ED',
//   borderColor: '#FA6400',
//   borderStyle: 'solid',
//   borderWidth: '1px',
//   color: '#FA6400' // if you want to set text color too
// };

// SelectedText = {
//   color: '#FA6400'
// }

// SelectedBorder = {
//   borderColor: '#FA6400',
//   borderStyle: 'solid',
//   borderWidth: '1px'
// }

// selectedBorder : any = "solid 1px #2F80ED"
// selectedColour : any = "#2F80ED";
// selectedBackgroudColour : any ="#F5F9FF";
// selectedBorderColour : any = "#2F80ED";
// selectedId : any = 4;
// selectedHeading : any = "All Bots"
// selectedTable : any = "Activity"
// selectedTutorial : boolean = false
// selectedInsights : boolean = true;

// ColourTheme(ID: number) {
//   this.selectedId = ID;

//   switch (ID) {
//     case 1:
//       this.selectedBorder = "solid 1px #FA6400";
//       this.selectedColour = "#FA6400";
//       this.selectedBackgroudColour = "#FFF4ED";
//       this.selectedBorderColour = "#FA6400";
//       this.selectedHeading = "Malicious";
//       break;

//     case 2:
//       this.selectedBorder = "solid 1px #28C76F";
//       this.selectedColour = "#28C76F";
//       this.selectedBackgroudColour = "#F2FBF5";
//       this.selectedBorderColour = "#28C76F";
//       this.selectedHeading = "Friendly";
//       break;

//     case 3:
//       this.selectedBorder = "solid 1px #A855F7";
//       this.selectedColour = "#A855F7";
//       this.selectedBackgroudColour = "#FAF5FF";
//       this.selectedBorderColour = "#A855F7";
//       this.selectedHeading = "Human";
//       break;

//     case 4:
//       this.selectedBorder = "solid 1px #2F80ED";
//       this.selectedColour = "#2F80ED";
//       this.selectedBackgroudColour = "#F5F9FF";
//       this.selectedBorderColour = "#2F80ED";
//       this.selectedHeading = "All Bots";
//       break;

//     default:
//       console.log('ℹ Unknown status');
//   }

//   // ✅ REBUILD the datasets with updated color and emphasis
//   const updatedDatasets = this.__ChartCounts.datasets.map((ds: any) => {
//     const isSelected = (
//       (ID === 1 && ds.label === 'Malicious') ||
//       (ID === 2 && ds.label === 'Friendly') ||
//       (ID === 3 && ds.label === 'Human') ||
//       (ID === 4 && ds.label === 'All Bots')
//     );

//     return {
//       ...ds,
//       borderColor: this.getColor(ds.label),
//       backgroundColor: this.getColor(ds.label),
//       borderWidth: isSelected ? 3 : 1,
//       pointRadius: isSelected ? 3 : 0
//     };
//   });

//   // ✅ Reassign chart config with updated datasets
//   this.__FinalChartCounts = {
//     ...this.__FinalChartCounts,
//     data: {
//       ...this.__FinalChartCounts.data,
//       datasets: updatedDatasets
//     }
//   };
// }



// tableChange(value : any){
//   this.selectedTable =  value;
//   console.log(this.Filters);
//   const Payload={
//     NetworkIds :'',
//     fromDate : '2025-05-07',
//     toDate : '2025-05-13',
//   }
 
//   this.GetExclusivesData()
// }

// TutorialChange(value : any){
//  this.selectedTutorial = value == 1 ? true : false;
// }

// InsightsChange(value : any){
// this.selectedInsights =  value == 1 ? true : false;
// }


// getStatusStyle(result: string): any {
//   switch (result) {
//     case 'bad':        // Rejected
//       return { color: '#FF4D4F', backgroundColor: '#FFF1F0' };
//     case 'good':       // Approved
//       return { color: '#28C76F', backgroundColor: '#F2FBF5' };
//     case 'notDetected': // In Review
//       return { color: '#A855F7', backgroundColor: '#F5F0FF' };
//     default:
//       return { color: '#6C757D', backgroundColor: '#F8F9FA' }; // N/A / Unknown
//   }
// }
 

// //#region Exclusives
//  IsDataAvailable : any
//  ExclusionService = inject(ExclusionService);
//  _GoogleList : any[]
//  _FacebookList : any[]
//  ExclusiveLoading : boolean = false
//  selectedPlatform: string = 'meta';


//   GetExclusivesData() {
//     console.log("Filters before API call:", this.Filters);

//     this.ExclusiveLoading = true;
//     this.IsDataAvailable = true;


//     this.ExclusionService.GetData(this.Filters)
//       .pipe(finalize(() => this.ExclusiveLoading = false)
//         , takeUntil(this.destroy$)
//         , catchError((error) => {
//           this.IsLoading = false;
//           this.IsDataAvailable = false;
//           this._GoogleList = [];  // Set empty array on error
//           this._FacebookList = [];
//           return throwError(() => new console.log("API Failed")
//           );
//         })
//       ).subscribe((data: any) => {
//         // console.log("API Response 1:", data);
//           const parsedBody = JSON.parse(data.body);
//           console.log("data",parsedBody);
//         if (!parsedBody.data?.Google?.length || !parsedBody.data?.Facebook?.length) {
//           this.IsDataAvailable = false;
//           console.log("false");
//           this._GoogleList = parsedBody.data.filteredResponse || [];
//           this._FacebookList = parsedBody.data.filteredResponse || [];
//         }
//         else {
//           console.log("true");
//           this.IsDataAvailable = true;
//           this._GoogleList = parsedBody.data.Google.length > 0 ? parsedBody.data.Google.sort((a: any, b: any) => b.Total - a.Total) : parsedBody.data.Google;
//           this._FacebookList = parsedBody.data.Facebook.sort((a: any, b: any) => b.Traffic - a.Traffic);

//           this._FacebookList = this._FacebookList.map((item: any) => {
//             return { ...item, Fbad_id: Number(item.Fbad_id) };
//           });
          
//       console.log("google: " , this._GoogleList);
//       console.log("meta :", this._FacebookList);
//         }
//       });

      
//   }

//   selectPlatform(platform: string) {
//     this.selectedPlatform = platform;    
//   }


//   //#endregion

// }
