import axios from "axios";
import React, { useEffect, useState } from "react";

const URL = "https://fakestoreapi.com/products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Demo delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await axios.get(URL);

      setProducts(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Page Title */}
      <div className="px-6 py-8 text-center">
        <h1 className="text-3xl font-bold text-[#201002]">
          Discover Our Products
        </h1>

        <p className="mt-2 text-sm text-[#201002]/60">
          Browse our collection and find something you’ll love.
        </p>
      </div>

      {/* Product Section */}
      <section className="min-h-[400px] px-6 py-8">
        {loading ? (
          <div className="flex min-h-[350px] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              {/* Spinner */}
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#201002]/20 border-t-[#201002]" />

              <p className="text-sm font-medium text-[#201002]/60">
                Loading products...
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-48 items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full max-w-full object-contain"
                  />
                </div>

                <h2 className="mt-4 line-clamp-2 text-sm font-semibold text-[#201002]">
                  {product.title}
                </h2>

                <p className="mt-2 font-bold text-[#c35724]">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
