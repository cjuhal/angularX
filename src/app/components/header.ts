import { Component, inject, linkedSignal } from '@angular/core';
import { Theme } from '../services/theme';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="inset-x-0 top-0 z-50">
      <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              class="h-8 w-auto"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            command="show-modal"
            commandfor="mobile-menu"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              data-slot="icon"
              aria-hidden="true"
              class="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="dashboard" class="text-sm/6 font-semibold text-gray-900">Dashboard</a>
          <a href="coins" class="text-sm/6 font-semibold text-gray-900">Coins</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Company</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
          <div class="relative inline-block w-11 h-5">
            <input
              [checked]="isCheked()"
              id="switch-component"
              (click)="themeService.toggle()"
              type="checkbox"
              class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
            />
            <label
              for="switch-component"
              class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
            >
            </label>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [],
})
export class Header {
  themeService = inject(Theme);

  isCheked = linkedSignal(() => this.themeService.theme() === 'dark');
}
