import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeesData : any[];
  constructor() {

    this.employeesData = [
      {
        employeeId: 'EMP001',
        name: 'Amit Sharma',
        position: 'Branch Manager',
        department: 'Operations',
        dateOfJoining: '2015-06-15',
        contactNumber: '9876543210',
        email: 'amit.sharma@bank.com',
        workLocation: 'Mumbai',
        employmentStatus: 'Active',
        salary: '₹12,50,000'
      },
      {
        employeeId: 'EMP002',
        name: 'Priya Gupta',
        position: 'Assistant Manager',
        department: 'Customer Service',
        dateOfJoining: '2017-08-01',
        contactNumber: '9876123456',
        email: 'priya.gupta@bank.com',
        workLocation: 'Delhi',
        employmentStatus: 'Active',
        salary: '₹7,50,000'
      },
      {
        employeeId: 'EMP003',
        name: 'Rajesh Kumar',
        position: 'Senior Loan Officer',
        department: 'Loans and Mortgages',
        dateOfJoining: '2014-04-10',
        contactNumber: '9876789012',
        email: 'rajesh.kumar@bank.com',
        workLocation: 'Bangalore',
        employmentStatus: 'Active',
        salary: '₹9,00,000'
      },
      {
        employeeId: 'EMP004',
        name: 'Anjali Verma',
        position: 'Operations Manager',
        department: 'Operations',
        dateOfJoining: '2016-02-25',
        contactNumber: '9876932101',
        email: 'anjali.verma@bank.com',
        workLocation: 'Chennai',
        employmentStatus: 'Active',
        salary: '₹10,50,000'
      },
      {
        employeeId: 'EMP005',
        name: 'Vikram Singh',
        position: 'Risk Analyst',
        department: 'Risk Management',
        dateOfJoining: '2019-07-12',
        contactNumber: '9876512345',
        email: 'vikram.singh@bank.com',
        workLocation: 'Hyderabad',
        employmentStatus: 'Active',
        salary: '₹8,00,000'
      },
      {
        employeeId: 'EMP006',
        name: 'Sonal Mehta',
        position: 'Relationship Manager',
        department: 'Sales',
        dateOfJoining: '2018-11-20',
        contactNumber: '9876987654',
        email: 'sonal.mehta@bank.com',
        workLocation: 'Pune',
        employmentStatus: 'Active',
        salary: '₹6,50,000'
      },
      {
        employeeId: 'EMP007',
        name: 'Karan Patel',
        position: 'Branch Assistant',
        department: 'Customer Service',
        dateOfJoining: '2020-01-10',
        contactNumber: '9876723456',
        email: 'karan.patel@bank.com',
        workLocation: 'Ahmedabad',
        employmentStatus: 'Active',
        salary: '₹4,00,000'
      },
      {
        employeeId: 'EMP008',
        name: 'Ravi Joshi',
        position: 'IT Support Specialist',
        department: 'IT',
        dateOfJoining: '2017-03-05',
        contactNumber: '9876321098',
        email: 'ravi.joshi@bank.com',
        workLocation: 'Kolkata',
        employmentStatus: 'Active',
        salary: '₹6,00,000'
      },
      {
        employeeId: 'EMP009',
        name: 'Nisha Reddy',
        position: 'HR Manager',
        department: 'Human Resources',
        dateOfJoining: '2014-09-01',
        contactNumber: '9876876543',
        email: 'nisha.reddy@bank.com',
        workLocation: 'Bangalore',
        employmentStatus: 'Active',
        salary: '₹11,00,000'
      },
      {
        employeeId: 'EMP010',
        name: 'Manoj Agarwal',
        position: 'Branch Head',
        department: 'Operations',
        dateOfJoining: '2011-02-25',
        contactNumber: '9876540987',
        email: 'manoj.agarwal@bank.com',
        workLocation: 'Mumbai',
        employmentStatus: 'Active',
        salary: '₹14,00,000'
      },
      {
        employeeId: 'EMP011',
        name: 'Shweta Singh',
        position: 'Loan Officer',
        department: 'Loans and Mortgages',
        dateOfJoining: '2020-06-19',
        contactNumber: '9876345678',
        email: 'shweta.singh@bank.com',
        workLocation: 'Delhi',
        employmentStatus: 'Active',
        salary: '₹7,00,000'
      },
      {
        employeeId: 'EMP012',
        name: 'Sunil Bhatia',
        position: 'Senior Analyst',
        department: 'Compliance',
        dateOfJoining: '2015-12-10',
        contactNumber: '9876456789',
        email: 'sunil.bhatia@bank.com',
        workLocation: 'Chennai',
        employmentStatus: 'Active',
        salary: '₹8,50,000'
      },
      {
        employeeId: 'EMP013',
        name: 'Rita Kapoor',
        position: 'Chief Financial Officer',
        department: 'Finance',
        dateOfJoining: '2012-01-01',
        contactNumber: '9876547654',
        email: 'rita.kapoor@bank.com',
        workLocation: 'Mumbai',
        employmentStatus: 'Active',
        salary: '₹20,00,000'
      },
      {
        employeeId: 'EMP014',
        name: 'Vikram Chauhan',
        position: 'Customer Support Executive',
        department: 'Customer Service',
        dateOfJoining: '2021-04-05',
        contactNumber: '9876784321',
        email: 'vikram.chauhan@bank.com',
        workLocation: 'Hyderabad',
        employmentStatus: 'Active',
        salary: '₹5,50,000'
      },
      {
        employeeId: 'EMP015',
        name: 'Neha Agarwal',
        position: 'Marketing Manager',
        department: 'Marketing',
        dateOfJoining: '2016-07-25',
        contactNumber: '9876541321',
        email: 'neha.agarwal@bank.com',
        workLocation: 'Delhi',
        employmentStatus: 'Active',
        salary: '₹9,50,000'
      },
      {
        employeeId: 'EMP016',
        name: 'Jatin Verma',
        position: 'Banking Associate',
        department: 'Customer Service',
        dateOfJoining: '2022-05-01',
        contactNumber: '9876789876',
        email: 'jatin.verma@bank.com',
        workLocation: 'Kolkata',
        employmentStatus: 'Active',
        salary: '₹3,50,000'
      },
      {
        employeeId: 'EMP017',
        name: 'Ishita Thakur',
        position: 'Legal Advisor',
        department: 'Legal',
        dateOfJoining: '2014-06-30',
        contactNumber: '9876545432',
        email: 'ishita.thakur@bank.com',
        workLocation: 'Mumbai',
        employmentStatus: 'Active',
        salary: '₹11,50,000'
      },
      {
        employeeId: 'EMP018',
        name: 'Arvind Singh',
        position: 'Relationship Manager',
        department: 'Sales',
        dateOfJoining: '2019-02-15',
        contactNumber: '9876890123',
        email: 'arvind.singh@bank.com',
        workLocation: 'Delhi',
        employmentStatus: 'Active',
        salary: '₹7,00,000'
      },
      {
        employeeId: 'EMP019',
        name: 'Pooja Joshi',
        position: 'Teller',
        department: 'Customer Service',
        dateOfJoining: '2020-03-18',
        contactNumber: '9876543213',
        email: 'pooja.joshi@bank.com',
        workLocation: 'Bangalore',
        employmentStatus: 'Active',
        salary: '₹4,50,000'
      },
      {
        employeeId: 'EMP020',
        name: 'Kavita Mehta',
        position: 'Branch Supervisor',
        department: 'Operations',
        dateOfJoining: '2017-09-22',
        contactNumber: '9876234567',
        email: 'kavita.mehta@bank.com',
        workLocation: 'Pune',
        employmentStatus: 'Active',
        salary: '₹6,00,000'
      }
    ];
    


   }

  ngOnInit(): void {
  }

}
