import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, retry, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  http = inject(HttpClient);
  api = 'https://api.coingecko.com/api/v3/';

  getCoins(): Observable<any> {
    return this.http.get(`${this.api}/coins/markets?per_page=50&page=1&vs_currency=usd`).pipe(
      retry({ count: 2, delay: 1000 }),
      switchMap((data) => of(data)),
    );
  }
}
