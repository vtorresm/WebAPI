import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  // readonly baseURL = 'http://localhost:61236/api/PaymentDetail'
  formData: PaymentDetail = new PaymentDetail();
}
