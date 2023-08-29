const fs = require('fs');
const bancodedados = require('../bancodedados');

const carregarCarrinho = () => {
    const carrinhoData = fs.readFileSync('carrinho.json');
    return JSON.parse(carrinhoData);
};

const salvarCarrinho = (carrinho) => {
    fs.writeFileSync('carrinho.json', JSON.stringify(carrinho, null, 2));
};

const consultarPizza = (req, res) => {
    const nomePizza = req.params.nome.toLowerCase();
    const pizza = bancodedados.pizzas.find(pizza => pizza.nome_pizza.toLowerCase() === nomePizza);
      
    if (pizza) {
        res.json(pizza);
    } else {
         res.status(404).json({ message: 'Pizza não encontrada' });
    }
};

const adicionarAoCarrinho = (req, res) => {
    const nomePizza = req.params.nome.toLowerCase();
    const quantidade = parseInt(req.query.quantidade || "1"); 
    const pizza = bancodedados.pizzas.find(pizza => pizza.nome_pizza.toLowerCase() === nomePizza);

    if (pizza) {
        const carrinho = carregarCarrinho();

        for (let i = 0; i < quantidade; i++) {
            carrinho.push(pizza);
            carrinho.valor_total += pizza.valor;
        }

        salvarCarrinho(carrinho);

        if (quantidade === 1) {
            res.json({ message: 'Pizza adicionada ao carrinho com sucesso!' });
        } else {
            res.json({ message: `${quantidade} pizzas adicionadas ao carrinho com sucesso!` });
        }

    } else {
        res.status(404).json({ message: 'Pizza não encontrada' });
    }
};

const removerDoCarrinho = (req, res) => {
    const nomePizza = req.params.nome.toLowerCase();
    const carrinho = carregarCarrinho();
    const indexPizza = carrinho.findIndex(pizza => pizza.nome_pizza.toLowerCase() === nomePizza);

    if (indexPizza !== -1) {
        carrinho.splice(indexPizza, 1);
        salvarCarrinho(carrinho);
        res.json({ message: 'Pizza removida do carrinho com sucesso!' });
    } else {
        res.status(404).json({ message: 'Pizza não encontrada no carrinho' });
    }
};

const calcularTotalCarrinho = (req, res) => {
    const carrinho = carregarCarrinho();

    const totalCentavos = carrinho.reduce((total, pizza) => total + pizza.valor, 0);
    const valorFormatado = (totalCentavos / 100).toFixed(2);

    const extrato = extratoDoPedido(carrinho);

    res.json({ total: `R$ ${valorFormatado}`, extrato });
};

const extratoDoPedido = (carrinho) => {
    const extrato = [];

    const quantidadePorPizza = {};
    for (const pizza of carrinho) {
        if (!quantidadePorPizza[pizza.nome_pizza]) {
            quantidadePorPizza[pizza.nome_pizza] = 1;
        } else {
            quantidadePorPizza[pizza.nome_pizza]++;
        }
    }

    for (const nomePizza in quantidadePorPizza) {
        extrato.push({
            nome_pizza: nomePizza,
            quantidade: quantidadePorPizza[nomePizza]
        });
    }

    return extrato;
};

module.exports = { 
    consultarPizza,
    adicionarAoCarrinho,
    removerDoCarrinho,
    calcularTotalCarrinho,
    extratoDoPedido
};