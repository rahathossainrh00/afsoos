import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (product) => {
    setCarts(carts.filter((item) => item.id !== product.id));
    toast.success(`${product.name} removed from cart!`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "colored",
    });
  };

  const handleCheckout = () => {
    if (carts.length === 0) return;
    setCarts([]);
    toast.success("Payment successful! 🎉 Thank you for your purchase!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "colored",
    });
  };

  return (
    <section className="py-[60px] bg-white" id="cart">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="rounded-[16px] p-[40px] border-2 border-[#f2f2f2] bg-white flex flex-col gap-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#101727]">Your Cart</h2>

          {/* Empty State */}
          {carts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="w-20 h-20 rounded-full bg-[#f9fafc] flex items-center justify-center text-4xl">
                🛒
              </div>
              <p className="text-xl font-semibold text-[#627382]">
                Your cart is empty
              </p>
              <p className="text-base text-[#627382] opacity-70">
                Add some tools to get started!
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex flex-col gap-4">
                {carts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between rounded-[16px] p-5 bg-[#f9fafc] gap-4"
                  >
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      <div className="w-[60px] h-[60px] rounded-full border border-[#f2f2f2] bg-white flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden p-3">
                        {product.image ? (
                          <img src={`/products/${product.image}`} alt={product.name} className="w-full h-full object-contain" />
                        ) : (
                          product.icon
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-xl text-[#101727]">
                          {product.name}
                        </p>
                        <p className="text-base text-[#627382]">
                          ${product.price}/{product.period}
                        </p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(product)}
                      className="font-bold text-base text-[#ff3980] hover:opacity-70 transition-opacity duration-200 cursor-pointer flex-shrink-0"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between border-t border-[#f2f2f2] pt-4">
                <span className="text-2xl font-bold text-[#101727]">Total:</span>
                <span className="text-2xl font-bold text-[#101727]">
                  ${total}/mo
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="rounded-full h-[52px] w-full text-white font-bold text-base hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #4F39F6, #9514FA)' }}
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
