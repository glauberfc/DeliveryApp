export const cities = [
  {
    id: 1,
    name: 'Russas',
    uf: 'CE',
  },
  {
    id: 2,
    name: 'Fortaleza',
    uf: 'CE',
  },
]

export const categories = [
  {
    id: 1,
    name: 'Restaurantes',
    icon:
      'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.parqueamantikir.com.br%2Fvisite%2Fgrupos%2F400-tabletalk-icon-food-rgb%2F&psig=AOvVaw19YYspqvHCUun4f4kyJChR&ust=1589816352068000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLivr8udu-kCFQAAAAAdAAAAABAD',
  },
  {
    id: 2,
    name: 'Supermercados',
    icon:
      'https://cdn.pixabay.com/photo/2020/04/14/18/53/market-5043873_1280.png',
  },
]

export const products = {
  company1: [
    {
      id: 1,
      name: 'X-burguer + batata',
      isInPromotion: true,
      price: 10.0,
      promotionalPrice: 8.0,
    },
    {
      id: 1,
      name: 'X-frango + batata',
      isInPromotion: true,
      price: 8.0,
      promotionalPrice: 6.0,
    },
  ],
}

export const companies = [
  {
    id: 1, // String!
    slug: 'big-burger', // String!
    name: 'Big Burger', // String!
    tagline: 'O melhor hamburger da cidade', // String!
    logo:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Fvetores-premium%2Flogotipo-de-hamburguer-grande_5422689.htm&psig=AOvVaw2O02eUdotxFo3QvPUmSk7T&ust=1589815765011000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjB1LObu-kCFQAAAAAdAAAAABAI', // String!
    cover: null, // String
    categoryName: 'Restaurantes',
    cityName: 'Russas',
    address: 'Rua 1, Centro - Russas/CE', // String!
    zipCode: '62900-000', // String!
    whatsApp: '+5588988888888', // String!
    // # businessHours: BusinessHours
    products: products.company1, // [Product!] @connection(keyName: "companyProducts", fields: ["id"])
    deliveryTax: 2.0, //Float!
    minDeliveryPrice: 10.0, //Float!
  },
]
