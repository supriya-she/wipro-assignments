import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {
  public cources:any=["Engineering","MCA","BTech agri","MCS","MSC"]

  public alldata:any;
  allData:any;
  public idd:any;

  public fn:any;
  public ln:any;
  public el:any;
  public cor:any;
  public gen:any;
  public ps:any;
  public cps:any;
  public id:any;
  constructor(private api:ApiService){
 this.getAllData();
  }
  onSubmitData(data:any){
   console.log(data.value); 
   this.api.getAllData().subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData();
    }),
    ((err:any)=>{
      console.log(err);
    })
   )
  }
  getAllData(){
    this.api.getAllData().subscribe(
      ((res:any)=>{
        console.log(res);
        this.allData=res;
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }

  onDel(data:any){
  console.log(data);
  this.api.deleteData(data.id).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData();
    }),
    (err:any)=>{
  console.log(err);
    })
  } 

  onUpdate(data:any){
console.log(data);
this.fn = data.fname;
this.ln = data.lname;
this.el = data.eml;
this.cor = data.cource;
this.gen = data.gender;
this.ps = data.pass;
this.cps = data.cpass;
this.id = data.id
  }

  onClickUpdateBtn(data:any){
console.log(data);
this.api.updateData(data.value).subscribe(
  ((res:any)=>{
    console.log(res);
    this.getAllData();
  }),
  ((err:any)=>{
    console.log(err);
  })
)
  }
}
