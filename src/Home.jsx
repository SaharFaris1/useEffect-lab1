import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
       
        axios.get('https://fakestoreapi.com/products ')
          .then(response => {
            setProducts(response.data);
          })
      }, []);
  return (

    <div className="bg-yellow-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
        <div className='flex'>
      <h1 className="text-4xl font-extrabold text-center text-yellow-700 mb-12">Welcome To MyShop</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded shadow overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt=''
              className="w-full h-56 object-contain p-4"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg">${product.price}</span>
                <button className="px-4 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
  
}
export default Home