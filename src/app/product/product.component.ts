import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() produkt!: Product;
  @Output() dodanoDoKoszyka = new EventEmitter<number>();
  iloscWSkoszyku: number = 0;
  
  dodajDoKoszyka() {
    this.dodanoDoKoszyka.emit(this.produkt.cena);
    this.iloscWSkoszyku++;
  }
  
  wyzerujIlosc() {
    this.iloscWSkoszyku = 0;
  }
}