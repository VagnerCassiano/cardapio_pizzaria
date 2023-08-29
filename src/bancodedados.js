const pizzas = [
    {
        nome_pizza: "Margherita",
        valor: 5000,
        ingredientes: [
            "Molho de tomate", "Mozzarella", "Manjericão"
        ]
    },
    {
        nome_pizza: "Calabresa",
        valor: 5000,
        ingredientes: ["Molho de tomate", "Calabresa fatiada", "Cebola"
        ]
    },
    {
        nome_pizza: "Calabresa com Catupiry",
        valor: 5800,
        ingredientes: ["Molho de tomate", "Calabresa fatiada", "Catupiry", "Cebola"
        ]
    },
    {
        nome_pizza: "Pepperoni",
        valor_centavos: 5600,
        ingredientes: ["Molho de tomate", "Pepperoni", "Mozzarella"]
      },
      {
        nome_pizza: "Quatro Queijos",
        valor_centavos: 5000,
        ingredientes: ["Molho de tomate", "Mozzarella", "Gorgonzola", "Provolone", "Parmesão"]
      },
      {
        nome_pizza: "Frango com Catupiry",
        valor_centavos: 5000,
        ingredientes: ["Molho de tomate", "Frango desfiado", "Catupiry", "Mozzarella"]
      },
      {
        nome_pizza: "Portuguesa",
        valor_centavos: 6000,
        ingredientes: ["Molho de tomate", "Presunto", "Mozzarella", "Ovo", "Cebola", "Azeitona"]
      },
      {
        nome_pizza: "Californiana",
        valor_centavos: 6300,
        ingredientes: ["Molho de tomate", "Peito de peru", "Abacaxi", "Mozzarella", "Creme de leite"]
      },
      {
        nome_pizza: "Rúcula com Tomate Seco",
        valor_centavos: 5100,
        ingredientes: ["Molho de tomate", "Mozzarella", "Rúcula", "Tomate seco"]
      },
      {
        nome_pizza: "Bacon com Milho",
        valor_centavos: 4900,
        ingredientes: ["Molho de tomate", "Bacon", "Milho", "Mozzarella"]
      },
      {
        nome_pizza: "Vegetariana",
        valor_centavos: 4900,
        ingredientes: ["Molho de tomate", "Mozzarella", "Brócolis", "Tomate", "Cebola", "Pimentão", "Azeitona"]
      },
    
    ];
    
    const carrinho = [];
    
    module.exports = { pizzas, carrinho };