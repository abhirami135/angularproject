import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

   searchTerm =''
  allProducts:any = []
  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
this.api.getAllProducts().subscribe(
  (data:any)=>{
    this.allProducts = data.result
  }
)
this.api.searchKey.subscribe(
  (data:any)=>{
    this.searchTerm = data
  }
)
  }

  addTowishlist(product:any) { 
    this.api.addTowishlist(product)
      .subscribe(
        (result: any) => {
          alert(result.message)
        },
        (result: any) => {
          alert(result.error.message)
        }

      )
  }

//addToCart(product)
addToCart(product:any){
this.cart.addToCart(product)

}













}
