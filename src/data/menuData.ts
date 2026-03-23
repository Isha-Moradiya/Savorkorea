export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  desc: string;
  fullDesc: string;
  rating: number;
  reviews: Review[];
}

export const menuItems: MenuItem[] = [
  { 
    id: 1, 
    name: 'Kimchi Pancakes', 
    category: 'Starters', 
    price: 12.00, 
    image: 'https://placehold.co/800x400', 
    desc: 'Crispy savory pancakes with aged kimchi and scallions.',
    fullDesc: 'Our signature Kimchi Pancakes (Kimchijeon) are made with well-fermented kimchi, giving them a deep, tangy flavor. They are pan-fried to perfection until the edges are golden and crispy, served with a side of soy-vinegar dipping sauce.',
    rating: 4.8,
    reviews: [
      { id: 'r1', userName: 'Sarah J.', rating: 5, comment: 'Best kimchi pancakes I\'ve ever had! So crispy.', date: '2024-03-15' },
      { id: 'r2', userName: 'Mike T.', rating: 4, comment: 'Great flavor, maybe a bit too spicy for some.', date: '2024-03-10' }
    ]
  },
  { 
    id: 2, 
    name: 'Mandu (Dumplings)', 
    category: 'Starters', 
    price: 10.50, 
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800', 
    desc: 'Handmade steamed or fried dumplings with pork and chives.',
    fullDesc: 'Traditional Korean dumplings filled with a savory mixture of ground pork, tofu, garlic chives, and ginger. Choose between steamed for a delicate texture or pan-fried for a satisfying crunch.',
    rating: 4.7,
    reviews: []
  },
  { 
    id: 3, 
    name: 'Bibimbap', 
    category: 'Main Course', 
    price: 18.50, 
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800', 
    desc: 'Mixed rice with vegetables, beef, and spicy gochujang.',
    fullDesc: 'A colorful bowl of warm white rice topped with an array of sautéed and seasoned vegetables (namul), sliced beef, and a fried egg. Served with our house-made gochujang (chili pepper paste) to be mixed in thoroughly before eating.',
    rating: 4.9,
    reviews: [
      { id: 'r3', userName: 'David L.', rating: 5, comment: 'The gochujang sauce is incredible.', date: '2024-03-12' }
    ]
  },
  { 
    id: 4, 
    name: 'Japchae', 
    category: 'Main Course', 
    price: 16.00, 
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800', 
    desc: 'Stir-fried glass noodles with vegetables and beef.',
    fullDesc: 'Sweet and savory stir-fried glass noodles made from sweet potato starch, tossed with colorful vegetables like carrots, spinach, and mushrooms, along with tender strips of beef.',
    rating: 4.6,
    reviews: []
  },
  { 
    id: 5, 
    name: 'Galbi (Short Ribs)', 
    category: 'BBQ', 
    price: 28.00, 
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800', 
    desc: 'Premium beef short ribs marinated in signature sauce.',
    fullDesc: 'High-quality beef short ribs marinated in a sweet and savory blend of soy sauce, pear juice, garlic, and sesame oil. Grilled over an open flame to achieve a smoky, caramelized finish.',
    rating: 5.0,
    reviews: [
      { id: 'r4', userName: 'Emma W.', rating: 5, comment: 'Melts in your mouth. Absolutely worth the price.', date: '2024-03-18' }
    ]
  },
  { 
    id: 6, 
    name: 'Samgyeopsal', 
    category: 'BBQ', 
    price: 22.00, 
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', 
    desc: 'Thick slices of pork belly grilled to perfection.',
    fullDesc: 'Thick, fatty slices of pork belly grilled until crispy. Served with lettuce wraps (ssam), garlic, green peppers, and ssamjang (a thick, spicy paste) for the ultimate Korean BBQ experience.',
    rating: 4.8,
    reviews: []
  },
  { 
    id: 7, 
    name: 'Bingsu', 
    category: 'Desserts', 
    price: 14.00, 
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800', 
    desc: 'Korean shaved ice with sweet red beans and fruit.',
    fullDesc: 'A refreshing dessert of milk-based shaved ice with a snow-like texture. Topped with sweet red beans (pat), chewy rice cakes (tteok), and seasonal fresh fruits.',
    rating: 4.7,
    reviews: []
  },
  { 
    id: 8, 
    name: 'Soju Cocktail', 
    category: 'Drinks', 
    price: 12.00, 
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', 
    desc: 'Refreshing blend of premium soju and seasonal fruits.',
    fullDesc: 'A modern twist on Korea\'s favorite spirit. We blend premium soju with fresh-pressed fruit juices and a hint of sparkling water for a light, refreshing cocktail.',
    rating: 4.5,
    reviews: []
  },
];