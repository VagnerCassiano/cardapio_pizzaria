const express = require('express');
const router = express.Router();

const bancodedados = require('./bancodedados');
const contaControlador = require('./controladores/contaControlador');

router.get('/consultar/:nome', contaControlador.consultarPizza);
router.post('/adicionar-ao-carrinho/:nome', contaControlador.adicionarAoCarrinho);
router.delete('/remover-do-carrinho/:nome', contaControlador.removerDoCarrinho);
router.get('/calcular-total', contaControlador.calcularTotalCarrinho);

module.exports = router;