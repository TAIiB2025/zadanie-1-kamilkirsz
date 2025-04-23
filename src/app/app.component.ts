import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { Product } from './product.model';
import { ViewChildren, QueryList } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, ProductComponent, KoszykComponent]
})

export class AppComponent {
  pokazProdukty = true;
  wartoscKoszyka = 0;

  produkty: Product[] = [
    new Product('Produkt 1', 20, new Date(2001, 8, 30), true),
    new Product('Produkt 2', 30, new Date(2020, 5, 10), false),
    new Product('Produkt 3', 15.5, new Date(2022, 3, 12), false),
    new Product('Produkt 4', 40, new Date(2023, 11, 1), true),
    new Product('Produkt 5', 50, new Date(2024, 1, 20), false),
  ];

  dodajDoKoszyka(cena: number) {
    this.wartoscKoszyka += cena;
  }

  toggleProdukty() {
    this.pokazProdukty = !this.pokazProdukty;
  }
  
  @ViewChildren(ProductComponent) komponentyProduktow!: QueryList<ProductComponent>;
  wyzerujKoszyk() {
    this.wartoscKoszyka = 0;
    this.komponentyProduktow.forEach((komponent) => komponent.wyzerujIlosc());
  }
}


