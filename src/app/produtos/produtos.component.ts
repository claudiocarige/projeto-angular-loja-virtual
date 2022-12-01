import { Component, OnInit} from '@angular/core';
import { IProduto, product } from './produto';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent{
    produtos: IProduto[] | undefined;

constructor(
  private produtoService: ProdutosService,
  private route: ActivatedRoute
){}

ngOnInit(): void{
  const products = this.produtoService.getAll();
  this.route.queryParamMap.subscribe(params =>{
    const descricao = params.get("descricao")?.toLowerCase();
    const preco = params.get("preco")?.toLowerCase();
    if(descricao){
      this.produtos = products.filter(produto => produto.descricao.toLowerCase().includes(descricao));  
      
      return;
    }
    this.produtos = products;
    
  });
}


}
