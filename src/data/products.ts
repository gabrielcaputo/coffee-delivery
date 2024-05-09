import { ProductType as Product } from "../@types/products";

export const productsList: Product[] = [
  {
    id: "expresso-tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tag: ["Tradicional"],
    price: 5.00,
  },
  {
    id: "expresso-americano",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tag: ["Tradicional"],
    price: 4.50,
  },
  {
    id: "expresso-cremoso",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tag: ["Tradicional"],
    price: 6.00,
  },
  {
    id: "expresso-gelado",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tag: ["Tradicional", "Gelado"],
    price: 6.00,
  },
  {
    id: "cafe-com-leite",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tag: ["Tradicional", "Com Leite"],
    price: 6.50,
  },
  {
    id: "latte",
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tag: ["Tradicional", "Com Leite"],
    price: 7.50,
  },
  {
    id: "capuccino",
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tag: ["Tradicional", "Com Leite"],
    price: 9.00,
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    tag: ["Tradicional", "Com Leite"],
    price: 7.00,
  },
  {
    id: "mocaccino",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tag: ["Tradicional", "Com Leite"],
    price: 9.00,
  },
  {
    id: "chocolate-quente",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tag: ["Especial", "Com Leite"],
    price: 9.50,
  },
  {
    id: "cubano",
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tag: ["Especial", "Alcoólico", "Gelado"],
    price: 15.00,
  },
  {
    id: "havaiano",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tag: ["Especial"],
    price: 12.00,
  },
  {
    id: "arabe",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tag: ["Especial"],
    price: 12.00,
  },
  {
    id: "irlandes",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tag: ["Especial", "Alcoólico"],
    price: 19.00,
  }
]