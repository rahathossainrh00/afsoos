import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  const scrollToProducts = () => {
    setActiveTab("products");
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar carts={carts} onCartClick={() => setActiveTab("cart")} />
      <Banner onExplore={scrollToProducts} />
      <Stats />

      {/* Tab Toggle */}
      <div className="flex justify-center my-10">
        <div className="flex bg-white border border-[#f6f6f6] rounded-full p-1 gap-1 shadow-sm">
          <button
            onClick={() => setActiveTab("products")}
            className={`rounded-full py-[14px] px-[20px] text-base font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "products"
                ? "bg-violet-600 text-white shadow-[0_3px_8px_rgba(97,7,236,0.30)]"
                : "text-[#25065d] font-medium hover:bg-violet-50"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`rounded-full py-[14px] px-[20px] text-base font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "cart"
                ? "bg-violet-600 text-white shadow-[0_3px_8px_rgba(97,7,236,0.30)]"
                : "text-[#25065d] font-medium hover:bg-violet-50"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {/* Conditional Section */}
      {activeTab === "products" ? (
        <ErrorBoundary>
          <Products
            productPromise={productPromise}
            carts={carts}
            setCarts={setCarts}
          />
        </ErrorBoundary>
      ) : (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <HowItWorks />
      <Pricing />
      <CTABanner onExplore={scrollToProducts} />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
