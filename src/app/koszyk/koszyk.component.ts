import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-koszyk',
  imports: [CommonModule],
  template: `<p>Wartość Twojego koszyka to {{ wartoscKoszyka.toFixed(2) }} zł  <button (click)="wyzerujKoszyk()" title="Wyczyść koszyk">❌</button></p>
 `
})
export class KoszykComponent {
  @Input() wartoscKoszyka: number = 0;
  @Output() wyzeruj = new EventEmitter<void>();
  
  wyzerujKoszyk() {
    this.wyzeruj.emit();
  }
}