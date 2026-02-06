import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark'

@Injectable({
  providedIn: 'root',
})
export class Theme {
  
 readonly theme = signal<ThemeMode>('dark');

  constructor() {
    const saved = localStorage.getItem('theme') as ThemeMode | null;
    if (saved) this.theme.set(saved);
  }


  toggle() {
    console.log('toggle checked')
    this.theme.update(prev => {
      const color = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', color);
      return color;
    });
  }

}
