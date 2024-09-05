import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allfruits: Fruit[] = [];
  constructor(private fruitService: FruitService) {}
  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data) => {
      this.allfruits = data;
    });
  }

  delete(id: any) {
    this.fruitService.delete(id).subscribe({
      next: (data: any) => {
        this.allfruits = this.allfruits.filter((element) => element.id != id);
      },
    });
  }
}
