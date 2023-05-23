import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private data = new BehaviorSubject('N');;
  data$ = this.data.asObservable();

  changeData(data: string) {
    this.data.next(data)
  }
}
