import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import StatCard from "../components/common/StatCard";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value="345"
            color="#6366f1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value="45"
            color="#6366f1"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value="65"
            color="#6366f1"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="12500000VND"
            color="#6366f1"
          />
        </motion.div>
      </main>

      {/* {PRODUCTTABLE} */}
    </div>
  );
};

export default ProductsPage;
