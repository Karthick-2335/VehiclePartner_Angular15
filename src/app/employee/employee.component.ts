import { Component } from '@angular/core';
import { FormGroup,FormControl,NgForm,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeFrom:any;
  regexMobile:string = "[789][0-9]{9}";
  regexEmail:string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  constructor(fb:FormBuilder){
    this.employeeFrom = 
    fb.group({
        Firstname : ['',[
        Validators.required,
        Validators.minLength(10)
      ]],
        Lastname : ['',[
        Validators.required,
        Validators.minLength(10)
      ]],
        Mobile : ['',[
        Validators.required,
        Validators.pattern(this.regexMobile)
      ]],
        Email : ['',[
        Validators.required,
        Validators.pattern(this.regexEmail)
      ]],
        AddressLine1 : ['',[
        Validators.required
      ]],
        AddressLine2 : ['',[
        Validators.required
      ]],
        State : ['',[
        Validators.required
      ]],
        District : ['',[
        Validators.required
      ]],
        Country : ['',[
        Validators.required
      ]],
        City: ['',[
        Validators.required
      ]],
        Pincode : ['',[
        Validators.required
      ]],
        Education : ['',[
        Validators.required
      ]],
        AadhaarNumber : ['',[
        Validators.required
      ]],
        AadhaarUpload : ['',[
        Validators.required
      ]],
        Pannumber : ['',[
        Validators.required
      ]],
        Pancard : ['',[
        Validators.required
      ]]
    })
  }
  get Firstname() {
    return this.employeeFrom.get('Firstname');
  }
  get Lastname(){
    return this.employeeFrom.get('Lastname');
  }
  get Mobile(){
    return this.employeeFrom.get('Mobile');
  }
  get Email(){
    return this.employeeFrom.get('Email');
  }
  get AddressLine1(){
    return this.employeeFrom.get('AddressLine1');
  }
  get AddressLine2(){
    return this.employeeFrom.get('AddressLine2');
  }
  get State(){
    return this.employeeFrom.get('State');
  }
  get District(){
    return this.employeeFrom.get('District');
  }
  get Country(){
    return this.employeeFrom.get('Country');
  }
  get City(){
    return this.employeeFrom.get('City');
  }
  get Pincode(){
    return this.employeeFrom.get('Pincode');
  }
  get Education(){
    return this.employeeFrom.get('Education');
  }
  get AadhaarNumber(){
    return this.employeeFrom.get('AadhaarNumber');
  }
  get AadhaarUpload(){
    return this.employeeFrom.get('AadhaarUpload');
  }
  get Pannumber(){
    return this.employeeFrom.get('Pannumber');
  }
  get Pancard(){
    return this.employeeFrom.get('Pancard');
  }
  onSubmit(){
    console.log(this.employeeFrom.value);
  }
}
