import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Phan Thanh Hai",
    category: "Toan",
    price: "10.22",
    stock: 122,
    sales: 1200,
  },
  {
    id: 2,
    name: "Nguyen Thi Phuong",
    category: "Ly",
    price: "12.2",
    stock: 272,
    sales: 1200,
  },
  {
    id: 3,
    name: "Phan Thi Thanh Huyen",
    category: "Hoa",
    price: "27.1",
    stock: 102,
    sales: 1200,
  },
  {
    id: 4,
    name: "Phan Minh Dat",
    category: "Sinh",
    price: "10.12",
    stock: 202,
    sales: 1200,
  },
  {
    id: 5,
    name: "Phan Thanh Hieu",
    category: "Ngu Van",
    price: "2.12",
    stock: 142,
    sales: 1200,
  },
  {
    id: 6,
    name: "Phan Thanh Hoan",
    category: "Ngu Van",
    price: "2.12",
    stock: 12,
    sales: 200,
  },
];

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Seach..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2
            focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full devide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="devide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex  gap-2 items-center">
                  {product.name}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
