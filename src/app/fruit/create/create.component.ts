import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FormBuilder, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  formData: FormBuilder | any;
  idLen: any;
  constructor(
    private fruitService: FruitService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.fruitService.getAll().subscribe({
      next: (data) => {
        console.log(data.length + 1);
        this.idLen = String(data.length + 1);
      },
    });
  }
  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      id: [this.idLen],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    });
  }

  create() {
    console.log(this.formData);
    this.fruitService
      .create({
        id: this.idLen,
        name: this.formData.value.name,
        price: this.formData.value.price,
        quantity: this.formData.value.quantity,
      })
      .subscribe({
        next: (data) => {
          this.router.navigate(['/fruit']);
        },
        error: (error) => {
          console.log(error);
        },
      });

    this.toastr.success('Fruit Created Successfully', 'Added');
  }
}
