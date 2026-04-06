import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductService } from '../../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-admin.html',
  styleUrl: './product-admin.css'
})
export class ProductAdmin implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  selectedFile: File | null = null;
  isEditing = false;
  currentProductId?: number;

  constructor(
    private productService: ProductService, 
    private fb: FormBuilder, 
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    const productData: Product = this.productForm.value;
    // UPDATES PRODUCT
    if (this.isEditing && this.currentProductId) {
      this.productService.updateProduct(this.currentProductId, productData).subscribe(() => {
      // 1. Verificamos se você selecionou uma imagem durante a edição
      if (this.selectedFile) {
        this.productService.uploadImage(this.currentProductId!, this.selectedFile).subscribe(() => {
          alert('Product and image updated successfully!');
          this.router.navigate(['/']);
        });
      } else {
        alert('Product updated!');
        this.router.navigate(['/']);
      }
    });
  } else { // CREATES PRODUCT
      this.productService.createProduct(productData).subscribe(newProduct => {
          this.productService.uploadImage(newProduct.id!, this.selectedFile!).subscribe(() => {
          alert('Product and image saved successfully!');
          this.resetForm();
          this.router.navigate(['/']);
        });
        
      });
    }
  }

  editProduct(product: Product) {
    this.isEditing = true;
    this.currentProductId = product.id;
    this.productForm.patchValue({
      name: product.name,
      description: product.description,
      price: product.price
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this setup item?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.resetForm();
        this.router.navigate(['/']);
      });
    }
  }

  resetForm() {
    this.isEditing = false;
    this.currentProductId = undefined;
    this.selectedFile = null;
    this.productForm.reset();
  }
}