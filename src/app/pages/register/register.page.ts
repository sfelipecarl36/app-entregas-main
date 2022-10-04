import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuarios: any
  nome: string
  sobrenome: string
  email: string
  senha: string
  confirmasenha: string

  constructor(
    private router: Router,
    firestore: AngularFirestore
  ) { 
    this.usuarios = firestore.collection('usuarios')
  }

  ngOnInit() {
  }

  cadastrar() {
    
    this.usuarios.add({ nome: this.nome, sobrenome: this.sobrenome , email: this.email,
    senha: this.senha, ativo: true});
    alert('Cadastro Efetivado com sucesso!');
    this.router.navigateByUrl('login');
  }

}
