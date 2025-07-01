import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [cartItems, setCartItems] = React.useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  // Add product to cart
  const addToCart = (product) => {
    const item = { ...product, id: Date.now() };
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert('Product added to cart!');
  };

  const products = [
    {
      name: 'Supreme x Nike Air Force 1',
      brand: 'Supreme',
      price: '$299.99',
      image: '/images/products/supreme_nike.jpg',
      description: 'Limited edition Supreme x Nike collaboration. White leather with red Supreme branding.',
      dripScore: 1200,
      tags: ['Sneakers', 'Supreme', 'Nike', 'Limited Edition'],
    },
    {
      name: 'Fear of God Hoodie',
      brand: 'Fear of God',
      price: '$350.00',
      image: '/images/products/fearofgod_hoodie.jpg',
      description: 'Premium Fear of God essentials hoodie',
      dripScore: 1400,
      tags: ['Hoodies', 'Fear of God', 'Luxury'],
    },
    {
      name: 'Nike Air Force 1',
      brand: 'Nike',
      price: '$150.00',
      image: '/images/products/nike_airforce1.jpg',
      description: 'Classic Nike Air Force 1 sneakers',
      dripScore: 800,
      tags: ['Sneakers', 'Nike', 'Classic'],
    },
    {
      name: 'Adidas Superstar',
      brand: 'Adidas',
      price: '$120.00',
      image: '/images/products/adidas_superstar.jpg',
      description: 'Iconic Adidas Superstar sneakers',
      dripScore: 700,
      tags: ['Sneakers', 'Adidas', 'Classic'],
    },
    {
      name: 'Vans Old Skool',
      brand: 'Vans',
      price: '$70.00',
      image: '/images/products/vans_oldskool.jpg',
      description: 'Classic Vans Old Skool sneakers',
      dripScore: 500,
      tags: ['Sneakers', 'Vans', 'Classic'],
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500 bg-primary-900 text-white"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Shop All</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-primary-500 rounded-xl shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-white">{product.brand}</p>
                <p className="mt-2 text-xl font-bold text-white">{product.price}</p>
                <p className="mt-2 text-sm text-white">{product.description}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
