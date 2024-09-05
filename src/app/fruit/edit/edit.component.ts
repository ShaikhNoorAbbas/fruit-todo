import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  allFruitData: Fruit = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fruitService: FruitService
  ) {}
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      let id: string = String(params.get('id'));
      this.getId(id);
    });
  }

  getId(id: string) {
    this.fruitService.edit(id).subscribe((data) => {
      console.log(data);
      this.allFruitData = data;
    });
  }

  update() {
    this.fruitService.update(this.allFruitData).subscribe({
      next: (data) => {
        this.router.navigate(['/fruit']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
