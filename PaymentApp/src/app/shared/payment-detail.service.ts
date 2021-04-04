import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailService {
  constructor(private http: HttpClient) {}

  formData: PaymentDetail = new PaymentDetail();
  readonly baseURL = 'http://localhost:49898/api/PaymentDetail'; // 49898 61236

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
}
