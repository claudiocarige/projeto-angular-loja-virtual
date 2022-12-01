import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, product } from './produtos/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
produtos: IProduto[] = product; 

  constructor(
   
  ) { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: string ){
    return this.produtos.find(produto => produto.id == produtoId);
  }
}
