import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allfruits: Fruit[] = [];
  constructor(
    private fruitService: FruitService,
    private toastr: ToastrService
  ) {}
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

    this.toastr.error('Fruit Deleted Successfully', 'Deleted');
  }
}
