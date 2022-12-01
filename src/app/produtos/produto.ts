export interface IProduto {
    id: string;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: Number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const product: IProduto[] = [
    { id: "1", descricao: "Sandália Branca", preco: 149.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato01.jpeg", quantidadeEstoque: 11 },
    { id: "2", descricao: "Sapato preto", preco: 119.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato02.jpeg", quantidadeEstoque: 10  },
    { id: "3", descricao: "Sapato excelente", preco: 149.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato03.jpeg", quantidadeEstoque: 10  },
    { id: "4", descricao: "Sapato Salto", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato04.jpeg", quantidadeEstoque: 10  },
    { id: "5", descricao: "Sapato Alto", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato05.jpeg", quantidadeEstoque: 10  },
    { id: "6", descricao: "Sapato roxo", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato06.jpeg", quantidadeEstoque: 10  },
    { id: "7", descricao: "Sandália cinza ", preco: 199.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato07.jpeg" , quantidadeEstoque: 10 },
    { id: "8", descricao: "Sandália preta", preco: 189.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato08.jpeg", quantidadeEstoque: 10  },
    { id: "9", descricao: "Tenis Prata", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato09.jpeg", quantidadeEstoque: 10  },
    { id: "10", descricao: "Sapato verde", preco: 249.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato10.jpeg", quantidadeEstoque: 10  },
    { id: "11", descricao: "Sapato Abobora", preco: 129.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato11.jpeg", quantidadeEstoque: 10  },
    { id:"12", descricao: "Sandália Prata", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato12.jpeg", quantidadeEstoque: 10  },
    { id: "13", descricao: "Sapato  cores", preco: 199.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato13.jpeg", quantidadeEstoque: 10  },
    { id: "14", descricao: "Tenis laranja", preco: 49.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato14.jpeg", quantidadeEstoque: 10  },
    { id: "15", descricao: "sapato vermelho", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato15.jpeg" , quantidadeEstoque: 10 },
    { id: "16", descricao: "sapato colorido", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato16.jpeg", quantidadeEstoque: 10  },
    { id: "17", descricao: "sapato Marrom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato17.jpeg", quantidadeEstoque: 10  },
    { id: "18", descricao: "sapato couro", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/img2/sapato18.jpeg", quantidadeEstoque: 10  },
]