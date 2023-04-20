import { Component } from '@angular/core';
import { Pessoa } from 'src/model/pessoa';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {


  //interpolation
  public idade:number = 22;

  //property binding
  public check:boolean = false;
  public img:string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  public imgNome:string = 'Google Logo';
  
  //event binding

  public position: {x:number, y:number} = {x:0, y:0};

  public mouseMoveTeste(valor: MouseEvent /*pode setar o tipo como any */){
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  public mouseEventTeste(valor: MouseEvent){
    console.log(valor);
  }

  mudarCheck(valor:string):void{
    alert(valor);
    console.log('mudou');
  }

  //two way data binding

  pessoa: Pessoa;
  pessoas: Array<Pessoa>;

  constructor(){
    this.pessoa = new Pessoa();
    this.pessoas = new Array<Pessoa>();
  }

  inserirPessoa():void{
    this.pessoas.push(this.pessoa);
    this.pessoa = new Pessoa();
  }


}

