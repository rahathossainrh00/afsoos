import { toast } from "react-toastify";

const tagStyles = {
  "best-seller": "bg-[#fef3c6] text-[#bb4d00]",
  popular: "bg-[#e1e7ff] text-violet-700",
  new: "bg-[#dbfce7] text-[#0a883e]",
};

const ProductCard = ({ product, carts, setCarts }) => {
  const { id, name, description, price, period, tag, tagType, features, icon, image } = product;

  const isInCart = carts.some((item) => item.id === id);

  const handleBuy = () => {
    if (isInCart) {
      toast.error("Already in cart!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        theme: "colored",
      });
      return;
    }
    setCarts([...carts, product]);
    toast.success(`${name} added to cart!`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "colored",
    });
  };

  return (
    <div className="rounded-[16px] p-6 flex flex-col gap-4 border-2 border-[#f2f2f2] bg-white relative hover:shadow-xl hover:border-violet-100 transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {tag && (
        <span
          className={`absolute top-5 right-5 rounded-full py-1.5 px-3 text-sm font-medium ${tagStyles[tagType] || "bg-gray-100 text-gray-600"}`}
        >
          {tag}
        </span>
      )}

      {/* Icon/Image */}
      <div className="w-[60px] h-[60px] rounded-full border border-[#f2f2f2] bg-[#f9fafc] flex items-center justify-center text-3xl overflow-hidden p-3">
        {image ? <img src={`/products/${image}`} alt={name} className="w-full h-full object-contain" /> : icon}
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-[#101727] pr-20">{name}</h3>

      {/* Description */}
      <p className="text-base text-[#627382] leading-relaxed">{description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-[#101727]">${price}</span>
        <span className="text-sm text-[#627382]">/{period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-base text-[#627382] font-medium">
            <span className="text-green-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <button
        onClick={handleBuy}
        className={`rounded-full h-[52px] w-full font-bold text-base mt-auto transition-all duration-200 cursor-pointer ${
          isInCart
            ? "bg-green-500 text-white cursor-default"
            : "bg-violet-600 text-white hover:bg-violet-700 shadow-md hover:shadow-lg"
        }`}
      >
        {isInCart ? "✓ Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
