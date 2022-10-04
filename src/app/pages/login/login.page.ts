import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  senha = '';
  produtos: any;
  private senhaMestre = "123";

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private firestore: AngularFirestore,
  ) { 
    console.log(router.url);
    this.produtos = firestore.collection('produtos').valueChanges();
    console.log(this.produtos);
  }

  ngOnInit() {
  }

  async alerta(mensagem){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    });

   
 await toast.present();

  }

  entrar(){

    this.firestore.collection('usuarios',
    ref => ref. /*limit(20).orderBy('preco', 'desc')*/
    where('email', '==', this.email).
    where('senha', '==', this.senha).
    where('ativo', '==', true)).valueChanges().subscribe( x=> {
      if(x.length===1){
        this.router.navigateByUrl('home');
      }
      else{
        alert('Dados incorretos');
        this.router.navigateByUrl('login');
      }
    } )
    
  }

}

