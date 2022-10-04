import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  private pedidos = [];
  private itens = [];

  constructor(
    private gerenciadorDeRotas: Router,
    firestore: AngularFirestore,
    private toastController: ToastController,
    
  ) { 
    firestore.collection('pedidos', ref => ref.where('cliente', '==', 'exper15gamer@gmail.com')).valueChanges().subscribe ( x => {
      this.pedidos = x;
    });
    firestore.collection('pedidos').
    doc('pV8zL95vDqBiXHOnukp5').
    collection('itens').valueChanges().subscribe( x => {
      this.itens = x;
      console.log(x);
    });
    console.log(this.itens)
  }

  async alerta(mensagem){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    });

   
 await toast.present();

  }

  ngOnInit() {
  }

}
