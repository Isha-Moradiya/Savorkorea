import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { menuCategories, menuItems } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { Plus, Star, Flame, ShoppingCart, Check } from "lucide-react";

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();

  const filteredItems = selectedCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    setAddedItems(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Page Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Our <span className="text-destructive">Menu</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Explore our authentic Korean dishes, crafted with love and tradition
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-destructive text-white shadow-lg transform scale-105"
                    : "bg-secondary text-foreground hover:bg-secondary/80 hover:text-destructive"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-secondary rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-destructive/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Rating Badge */}
                  {item.rating && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-destructive fill-destructive" />
                      <span className="text-white text-sm font-bold">{item.rating}</span>
                    </div>
                  )}

                  {/* Spicy Level */}
                  {item.spicyLevel && item.spicyLevel > 0 && (
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      {[...Array(item.spicyLevel)].map((_, i) => (
                        <Flame key={i} className="w-3 h-3 text-destructive fill-destructive" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-destructive transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-destructive">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`relative px-5 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                        addedItems.has(item.id)
                          ? "bg-green-600 text-white"
                          : "bg-destructive text-white shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {addedItems.has(item.id) ? (
                        <span className="flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          Added
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Plus className="w-4 h-4" />
                          Add
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <ShoppingCart className="w-16 h-16 text-destructive/30 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No items found</h3>
              <p className="text-foreground/60">Try selecting a different category</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
