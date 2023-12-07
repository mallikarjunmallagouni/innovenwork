import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService, private router:Router){}

  showLogin=false;
  authError:string='';

  ngOnInit(): void {
    this.seller.reloadSeller()
  }


signUp(datas:SignUp):void{
console.warn(datas)
this.seller.userSignUp(datas)
// .subscribe((result)=>{
// if(result){
// this.router.navigate(['seller-home'])
// }
// })
}

login(datas:SignUp):void{
  // console.warn(datas)
  // .subscribe((result)=>{
  // if(result){
  // this.router.navigate(['seller-home'])
  // }
  // })
  this.authError='';
  this.seller.userLogin(datas)
  this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError="Email or password is in correct"
    }
  })
  }

openLogin(){
 this.showLogin=true;
}

openSignUp(){
  this.showLogin=false;
}
}
