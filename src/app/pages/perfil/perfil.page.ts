import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private dados = [];

  constructor(
    private gerenciadorDeRotas: Router,
    firestore: AngularFirestore,
    private toastController: ToastController,
  ) { 
    firestore.collection('usuários', ref => ref.where('cliente', '==', 'exper15gamer@gmail.com')).valueChanges().subscribe ( x => {
      this.dados = x;
    });
  }

  ngOnInit() {
  }

  sair(){
    this.gerenciadorDeRotas.navigateByUrl('login');
  }

}
