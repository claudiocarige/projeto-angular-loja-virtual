import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produto';



@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produto: IProduto | undefined;
  quantidade = 1;
 
  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){ }
  
  ngOnInit(): void {
    const paramRoute = this.route.snapshot.paramMap;
    const paramId = String(paramRoute.get("id"));
    this.produto = this.produtoService.getOne(paramId);
  }
  adicionarAoCarrinho(){
   this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");
   const produto: IProdutoCarrinho = {
    ...this.produto!,
    quantidade: this.quantidade
   }
   this.carrinhoService.adicionarAoCarrinho(produto); 
  }
}
