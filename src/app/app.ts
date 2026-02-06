import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Theme } from './services/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  template: `
    <app-header></app-header>
      <div class="bg-white">
        <router-outlet />
        </div>
    <app-footer></app-footer>
`,
})
export class App {
  protected readonly title = signal('angularX');
  themeService = inject(Theme);

  constructor() {
    effect(() => {
      const mode = this.themeService.theme();
      document.documentElement.classList.toggle('dark', mode === 'dark');
    });
  }

}
