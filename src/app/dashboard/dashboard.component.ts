import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
modal:string = 'none';
activeLinkAll:boolean = true;
activeLinkEmail:boolean = false;
activeLinkFile:boolean = false;
modalOpen(){
  this.modal = 'block';
}
modalClose(){
  this.modal = 'none';
}
activeNav(data:string)
{
  if(data == "All"){
    this.activeLinkEmail = false;
    this.activeLinkFile = false;
    this.activeLinkAll = true;
  }
  else if (data == "Email"){
    this.activeLinkAll = false;
    this.activeLinkFile = false;
    this.activeLinkEmail = true;
  }
  else if (data == "File"){
    this.activeLinkAll = false;
    this.activeLinkEmail = false;
    this.activeLinkFile = true;
  }
}
}
