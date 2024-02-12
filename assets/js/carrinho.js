class Cart {
    products = [];
    constructor() {
        this.products = JSON.parse(localStorage.getItem("cart")) || [];
    }

    add(id, name, image, ref, description, color, category) {
        let payload = {
            id,
            name,
            image,
            ref,
            description,
            color,
            category,
            quantity:[
                {
                    id:0,
                    value: 1
                }
            ]
        };

        const exist = this.products.find((p) => p.id === payload.id);

        if (!exist) {
            this.products.push(payload)
        }

        this.save();
        return true
    }

    // removerProduto(idProduto) {
    //   this.produtos = this.produtos.filter(produto => produto.id !== idProduto);
    //   this.salvarCarrinho();
    // }

    // atualizarQuantidade(idProduto, quantidade) {
    //   const produto = this.produtos.find(produto => produto.id === idProduto);
    //   if (produto) {
    //     produto.quantidade = quantidade;
    //     this.salvarCarrinho();
    //   }
    // }

    save() {
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
    clear(){
        localStorage.setItem('cart', '[]'); 
    }

    allProducts() {
      return this.products;
    }
}
