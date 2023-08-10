import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { SalariesService } from '../salaries.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent {

  user:any;
  public allusers:any=[];
 constructor(private dt:SalariesService){
this.getuser()
 } 
getuser(){
this.dt.FetchUFromBackend().subscribe((res:any)=>{
  console.log(res);
  this.allusers = res.users;
  console.log(this.allusers)
},
(err:any)=>{
  console.log(err);
}
)
}





















//   public alldata:any=[];
// employeeForm: any;
// constructor(public fb:FormBuilder,private service:EmployeeService){
// this.employeeForm = this.fb.group({
//   Name:[""],
//   Salary:[""],
//   Email:[""],
//   Age:[""],

// })
// }
// ngOnInit():void{

// }

//  submitForm(){
//   //console.log(this.employeeForm.value);
//   this.service.AddUpdateEmployee(this.employeeForm.value).subscribe(data=>{
//     alert("Added");
//     console.log(data);
//   })
//   this.employeeForm(data.value).subscribe(
//   ((res:any)=>{
//     console.log(res);
//   }),
//   ((err:any)=>{
//     console.log(err);
//   })
//  )
 }
//  getAllData(){
//    this.employeeForm().subscribe(
//     ((res:any)=>{
//       console.log(res);
//     }),
//      ((err:any)=>{
//        console.log(err);
//    })
//    )
//  }

