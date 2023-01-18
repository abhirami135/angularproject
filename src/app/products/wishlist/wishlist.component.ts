import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList:any
  eMsg:string=''
  constructor(private api:ApiService ,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe(
      //success  response
     (data:any)=>{
       this.wishList = data.result
       if(this.wishList.length==0){
        this.eMsg='empty wishlist'
       }
     },
     //client error
     (data:any)=>{
      this.eMsg = data.error.message
     }
    )
  }
  

//deleteItemWlist

// deleteFromWlist(product:any){
//   this.api.deleteFromWlist(product.id)
//   .subscribe(
//     (result:any)=>{
//      // alert(result.message)
//     //  window.location.reload();
//     // this.router.navigateByUrl('wishlist')
//     this.wishList = result.wishlist
//     if(this.wishList.length==0){
//       this.eMsg='empty wishlist'
//      }
//     },
//     (result:any)=>{
//       alert (result.error.message)
//     }
//   )
// }


deleteFormWlist(product:any){
  this.api.deleteFormWlist(product.id)
    .subscribe(
     (result:any)=>{
      this.wishList = result.wishlist

        if(this.wishList.length==0){
         this.eMsg='empty wishlist'
        }
    //  alert(result.message)
//window.location.reload();
    //  this.router.navigateByUrl('wish-list')
     },
     (result:any)=>{
      alert(result.error.message)
     }
    )
  }



//addToCart(product)
addToCart(product:any){
  this.cart.addToCart(product)
  this.deleteFormWlist(product)
}

}
