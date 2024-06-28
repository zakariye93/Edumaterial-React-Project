// src/deskmain/ProductDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import bog11 from './Images/bog11.jpg';
import bog4 from './Images/bog4.jpg';
import bog12 from './Images/bog12.jpg';
import bog7 from './Images/bog7.jpg';

const products = [
  { id: 1, name: "Book1", price: "$12", rating: 5, image: bog11, description: 'Detailed description for Book1' },
  { id: 2, name: "Book2", price: "$8", rating: 4, image: bog4, description: 'Detailed description for Book2' },
  { id: 3, name: "Reading Book", price: "$10", rating: 4, image: bog12, description: 'Detailed description for Reading Book' },
  { id: 4, name: "Book3", price: "$15", rating: 5, image: bog7, description: 'Detailed description for Book3' },
  { id: 5, name: "Book4", price: "$9", rating: 3, image: bog11, description: 'Detailed description for Book4' },
  { id: 6, name: "Book5", price: "$11", rating: 4, image: bog4, description: 'Detailed description for Book5' },
  { id: 7, name: "Book6", price: "$7", rating: 3, image: bog12, description: 'Detailed description for Book6' },
  { id: 8, name: "Book7", price: "$13", rating: 5, image: bog7, description: 'Detailed description for Book7' },
  { id: 9, name: "Book8", price: "$14", rating: 4, image: bog11, description: 'Detailed description for Book8' },
  { id: 10, name: "Book9", price: "$6", rating: 3, image: bog4, description: 'Detailed description for Book9' },
  { id: 11, name: "Book10", price: "$16", rating: 5, image: bog12, description: 'Detailed description for Book10' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 10);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">{product.name}</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
          <div className="md:ml-8 mt-8 md:mt-0">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{product.description}</p>
            <p className="text-2xl text-gray-800 mb-4">{product.price}</p>
            <div className="flex mb-6">
              {Array.from({ length: product.rating }, (_, index) => (
                <FaStar key={index} className="text-yellow-500 ml-1" />
              ))}
            </div>
            <Link to="/" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium">
              Back to Home
            </Link>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-700 mt-12">Related Books</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="m-4 p-4 bg-white rounded-lg shadow-lg w-60">
              <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p className="text-lg text-gray-600">{relatedProduct.price}</p>
              <div className="flex mb-4">
                {Array.from({ length: relatedProduct.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500 ml-1" />
                ))}
              </div>
              <Link to={`/product/${relatedProduct.id}`} className="text-blue-500 hover:text-blue-700">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
