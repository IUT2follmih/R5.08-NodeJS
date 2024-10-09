const data = {
  top_ventes: [
    {
      nom: 'Masque FFP 200',
      nombre: '38331937286',
      image: '/assets/img/produits/masque.jpg',
      url: '/boutique/rayon/4'
    },
    {
      nom: 'Carottes',
      nombre: '32147552649',
      image: '/assets/img/produits/carottes.jpg',
      url: '/boutique/rayon/2'
    },
    {
      nom: 'Chou Romanesco',
      nombre: '69492',
      image: '/assets/img/produits/romanesco.jpg',
      url: '/boutique/rayon/2'
    },
    {
      nom: 'Nutella',
      nombre: '879',
      image: '/assets/img/produits/nutella.jpg',
      url: '/boutique/rayon/3'
    }
  ],
  rayons: [
    {
      nom: 'Fruits',
      description: 'De la passion ou de ton imagination',
      image: '/assets/img/categories/fruits.jpg',
      numRayon: 1,
      produits: [
        {
          nom: 'Pêche',
          description: 'Elle va te la donner',
          image: '/assets/img/produits/peche.jpg',
          prix: {
            EUR: 2.84,
            CAD: 4.1,
            USD: 2.99,
            GBP: 2.46,
            PHP: 169.31,
            IDR: 46.643
          }
        }
      ]
    },
    {
      nom: 'Junk Food',
      description: 'Chère et cancérogène, tu es prévenu(e)',
      image: '/assets/img/categories/junk_food.jpg',
      numRayon: 3,
      produits: [
        {
          nom: 'Nutella',
          description: "C'est bon, sauf pour ta santé",
          image: '/assets/img/produits/nutella.jpg',
          prix: {
            EUR: 2.84,
            CAD: 4.1,
            USD: 2.99,
            GBP: 2.46,
            PHP: 169.31,
            IDR: 46.643
          }
        }
      ]
    },
    {
      nom: 'Légumes',
      description: 'Plus tu en manges, moins tu en es un',
      image: '/assets/img/categories/legumes.jpg',
      numRayon: 2,
      produits: [
        {
          nom: 'Carotte',
          description: "C'est bon pour la vue",
          image: '/assets/img/produits/carottes.jpg',
          prix: {
            EUR: 2.84,
            CAD: 4.1,
            USD: 2.99,
            GBP: 2.46,
            PHP: 169.31,
            IDR: 46.643
          }
        }
      ]
    },
    {
      nom: 'Virus',
      description: 'Une opportunité, il faut en profiter',
      image: '/assets/img/categories/corona.jpg',
      numRayon: 4,
      produits: [
        {
          nom: 'Masque FFP 200',
          description: 'Passe incognito face au virus',
          image: '/assets/img/produits/masque.jpg',
          prix: {
            EUR: 2.84,
            CAD: 4.1,
            USD: 2.99,
            GBP: 2.46,
            PHP: 169.31,
            IDR: 46.643
          }
        }
      ]
    }
  ]
};

export default data;
