import { Component, inject } from '@angular/core';
import { CoinsService } from '../../services/coins.ts';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-coins',
  imports: [],
  template: `
    <div class="flex grid grid-cols-4 gap-4">
      @defer {
        @for (item of coinList(); track item.id) {
          <div class="flex flex-col justify-center w-[200px]">
            <div class="col-1 text-center">
              <h2 class="text-3xl">{{ item.name }}</h2>
              <p class="text-3xl">{{ item.current_price }}</p>
            </div>
            <div class="col-2">
              <img [src]="item.image" [alt]="item.symbol" [width]="200" [height]="200" />
            </div>
          </div>
        }
      } @loading (minimum 2s) {
        <div class="center flex">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class Coins {
  coinsService = inject(CoinsService);

  coinList = toSignal(this.coinsService.getCoins(), { initialValue: [] });
}
