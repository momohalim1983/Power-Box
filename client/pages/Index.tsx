import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Star,
  ShoppingCart,
  Check,
  Zap,
  Users,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
  Gift,
  Package,
  Heart,
  BadgeCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { PricingDisplay } from "@/components/PricingDisplay";
import { FloatingSnacks } from "@/components/FloatingSnacks";
import { StickyCTA } from "@/components/StickyCTA";
import { CustomerReviews } from "@/components/CustomerReviews";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Professional pricing
  const [salePrice] = useState(31.95);

  const walmartUrl =
    "https://www.walmart.com/ip/Healthy-Snack-Box-Tasty-Nutrient-Rich-Variety-42-Count-by-Gift-A-Snack/14479818419?selectedSellerId=16964&selectedOfferId=BEA9DA42A8853A4C927EECB4D702F303&clickid=3PE2sMyDBxycW1s0QQThKWW7Ukp2AmR-AQ%3AGxo0&irgwc=1&sourceid=imp_3PE2sMyDBxycW1s0QQThKWW7Ukp2AmR-AQ%3AGxo0&veh=aff&wmlspartner=imp_5610446&affiliates_ad_id=565706&campaign_id=9383&sharedid=mp_16964_2016489964_knpf1_4mtlu49_BEA9DA42A8853A4C927EECB4D702F303&utm_source=landing&utm_medium=cta&utm_campaign=snackbox";

  const productImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F84282e2d620247d2b8d8845fda2c790e%2F79d471e5bc56457eb2c3b1c3eb6586ae?format=webp&width=800", // Main Energy Care Package
    "https://cdn.builder.io/api/v1/image/assets%2F84282e2d620247d2b8d8845fda2c790e%2F05b5599b733643de9ed02db80950feb9?format=webp&width=800", // Inside box view
    "https://cdn.builder.io/api/v1/image/assets%2F84282e2d620247d2b8d8845fda2c790e%2Fec2c685b6b9d438f97083ea2cdb4458b?format=webp&width=800", // Outside box view
  ];

  const handleBuyClick = (location: string) => {
    // Track conversion event and redirect directly
    console.log(`Buy clicked from: ${location}`);
    handleProceedToWalmart();
  };

  const handleProceedToWalmart = () => {
    // Actually redirect to Walmart
    console.log("Proceeding to Walmart checkout");
    const link = document.createElement("a");
    link.href = walmartUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer nofollow";
    link.click();
  };

  const handleCardClick = () => {
    console.log("Card clicked - opening modal");
    setIsModalOpen(true);
  };

  const scrollToProduct = () => {
    document
      .getElementById("product-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Floating Snack Animations */}
        <FloatingSnacks />

        {/* Professional Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Nutritious Snack Box with Breakfast Bars and Delicious Chips |
                  Gift A Snack (42 Count)
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${i < 4 || (i === 4 && i < 4.6) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-gray-700">
                    4.6 ⭐
                  </span>
                  <span className="text-sm sm:text-base text-gray-600">
                    from 23 reviews
                  </span>
                </div>

                {/* Price Section */}
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <PricingDisplay
                      salePrice={salePrice}
                      size="lg"
                      className="[&>div:first-child]:flex-col sm:[&>div:first-child]:flex-row [&>div:first-child]:items-start sm:[&>div:first-child]:items-center [&>div:first-child]:gap-2 sm:[&>div:first-child]:gap-3"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-green-600 font-medium">
                        ✓ Subscribe & Save available
                      </span>
                      <span className="text-xs sm:text-sm text-blue-600 font-medium">
                        ✓ Walmart+ offer eligible
                      </span>
                    </div>
                  </div>
                </div>

                {/* Urgency/Delivery Section */}
                <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      <span className="text-sm sm:text-base font-semibold text-green-800">
                        Arrives by Thu, Aug 21
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-red-600 font-medium sm:ml-auto">
                      ⚡ Limited stock available
                    </span>
                  </div>
                </div>

                {/* Primary CTA */}
                <Button
                  onClick={handleCardClick}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-3 sm:mb-4 touch-manipulation"
                >
                  View Product Details
                  <ShoppingCart className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>

                <Button
                  onClick={scrollToProduct}
                  variant="outline"
                  size="lg"
                  className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 touch-manipulation"
                >
                  Learn More About This Product
                </Button>
              </div>

              {/* Right Column - Product Image */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30">
                    <img
                      src={productImages[0]}
                      alt="Nutritious Snack Box with Breakfast Bars and Delicious Chips - 42 Count"
                      className="w-full h-auto rounded-2xl shadow-lg"
                      loading="eager"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          id="product-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-slate-50 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
              Why Choose Our Nutritious Snack Box?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Package,
                  title: "Variety of Snacks",
                  desc: "Perfect mix of breakfast bars and savory snacks for any time of day",
                  color: "blue",
                },
                {
                  icon: Gift,
                  title: "High-End Packaging",
                  desc: "Attractive and professional packaging that makes a great impression",
                  color: "purple",
                },
                {
                  icon: Zap,
                  title: "Grab-and-Go Convenience",
                  desc: "Individually packaged snacks perfect for busy lifestyles",
                  color: "green",
                },
                {
                  icon: Users,
                  title: "Suitable for All Ages",
                  desc: "Perfect for adults, teens, and college students alike",
                  color: "orange",
                },
                {
                  icon: Heart,
                  title: "Heartwarming Greeting Card",
                  desc: "Comes with a special greeting card to show you care",
                  color: "red",
                },
                {
                  icon: BadgeCheck,
                  title: "42 Count Value",
                  desc: "Generous quantity ensuring lasting satisfaction and value",
                  color: "indigo",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-r ${
                      benefit.color === "blue"
                        ? "from-blue-100 to-blue-200"
                        : benefit.color === "purple"
                          ? "from-purple-100 to-purple-200"
                          : benefit.color === "green"
                            ? "from-green-100 to-green-200"
                            : benefit.color === "orange"
                              ? "from-orange-100 to-orange-200"
                              : benefit.color === "red"
                                ? "from-red-100 to-red-200"
                                : "from-indigo-100 to-indigo-200"
                    } rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                  >
                    <benefit.icon
                      className={`h-8 w-8 ${
                        benefit.color === "blue"
                          ? "text-blue-600"
                          : benefit.color === "purple"
                            ? "text-purple-600"
                            : benefit.color === "green"
                              ? "text-green-600"
                              : benefit.color === "orange"
                                ? "text-orange-600"
                                : benefit.color === "red"
                                  ? "text-red-600"
                                  : "text-indigo-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA after Benefits */}
            <div className="text-center mt-8 sm:mt-12">
              <Button
                onClick={handleCardClick}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
              >
                View Product Details
                <ShoppingCart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl text-white">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Walmart Logo & Trust */}
                <div className="text-center">
                  <div className="bg-white rounded-xl p-4 mb-4 inline-block">
                    <div className="text-blue-600 font-bold text-2xl">
                      Walmart
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Official Walmart Seller
                  </h3>
                  <p className="text-blue-100">
                    Secure checkout and fast delivery
                  </p>
                </div>

                {/* Seller Rating */}
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-2">Pro Seller</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ))}
                        <Star className="h-5 w-5 text-yellow-400" />
                      </div>
                      <span className="font-semibold">4.1</span>
                    </div>
                    <p className="text-blue-100">from 570 reviews</p>
                  </div>
                </div>

                {/* Returns Policy */}
                <div className="text-center">
                  <div className="bg-green-500 rounded-full p-4 mb-4 inline-block">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Free 90-Day Returns
                  </h3>
                  <p className="text-blue-100">
                    Shop with confidence - easy returns
                  </p>
                </div>
              </div>

              {/* CTA after Trust */}
              <div className="text-center mt-8">
                <Button
                  onClick={handleCardClick}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
                >
                  View Product Details
                  <ShoppingCart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visual Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 py-20 bg-gradient-to-r from-gray-50 to-slate-50 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
              See What's Inside Your Box
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {productImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={handleCardClick}
                  className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">
                      {index === 0
                        ? "Complete Collection"
                        : index === 1
                          ? "Inside View"
                          : "Beautiful Packaging"}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA after Gallery */}
            <div className="text-center mt-8 sm:mt-12">
              <Button
                onClick={handleCardClick}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
              >
                View Product Details
                <ShoppingCart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Customer Reviews Section */}
        <CustomerReviews />

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Fuel Your Day with Nutritious Snacks?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who choose Gift A Snack for
              quality and convenience
            </p>

            {/* Final Pricing Reminder */}
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mb-8 inline-block">
              <PricingDisplay
                salePrice={salePrice}
                size="lg"
                className="[&>div:first-child>span:first-child]:text-white/70 [&>div:first-child>span:last-child]:text-white [&>div:last-child]:text-white/80"
              />
              <div className="text-blue-100 mt-3">
                <div>✓ Subscribe & Save available</div>
                <div>✓ Free 90-day returns</div>
                <div>✓ Arrives by Thu, Aug 21</div>
              </div>
            </div>

            <Button
              onClick={handleCardClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
            >
              View Product Details
              <ShoppingCart className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </motion.section>

        {/* Enhanced Product Modal - Fixed 3-Part Layout */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Content className="fixed inset-0 z-[1001] w-screen h-screen sm:inset-auto sm:left-1/2 sm:top-1/2 sm:w-full sm:max-w-[640px] sm:h-[90vh] sm:max-h-[800px] sm:translate-x-[-50%] sm:translate-y-[-50%] bg-white border-0 rounded-none sm:rounded-2xl shadow-2xl p-0 overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col"
            >
              {/* HEADER - Fixed at top */}
              <div className="relative flex-shrink-0 bg-white border-b border-gray-200 p-4 sm:p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pr-12">
                    Nutritious Snack Box with Breakfast Bars and Delicious Chips
                    | Gift A Snack (42 Count)
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-600 mt-2">
                    View detailed product information, pricing, and purchase options for this 42-piece snack collection.
                  </DialogDescription>
                </DialogHeader>

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10 shadow-sm"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* BODY - Scrollable content */}
              <div
                className="flex-1 overflow-y-auto p-4 sm:p-6"
                style={{
                  maxHeight: "calc(100vh - 160px - 100px)", // Account for header and footer on mobile
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {/* Product Image */}
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50">
                    <img
                      src={productImages[currentImageIndex]}
                      alt="Nutritious Snack Box - Gift A Snack"
                      className="w-full h-48 sm:h-64 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {productImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-white touch-manipulation"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-white touch-manipulation"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 || (i === 4 && i < 4.6) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    4.6 ⭐ (23 reviews)
                  </span>
                </div>

                {/* Pricing Section */}
                <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <PricingDisplay
                    salePrice={salePrice}
                    size="lg"
                    className="mb-2"
                  />
                  <div className="text-sm text-green-600 font-medium">
                    ✓ Subscribe & Save available
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    ✓ Walmart+ offer eligible
                  </div>
                </div>

                {/* Pieces Count */}
                <div className="mb-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 text-base">
                      Pieces Count:
                    </span>
                    <span className="text-lg font-bold text-blue-600">
                      42 Items
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Perfect variety for extended enjoyment
                  </p>
                </div>

                {/* More Details Section - Always Visible */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    More Details
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Ultimate snack experience in a beautifully designed high-end packaging box",
                      "Packed with a variety of breakfast bars and savory snacks for daily energy",
                      "Individually packaged snacks for convenient grab-and-go options",
                      "Ideal for adults, teens, and college students alike",
                      "Arrives with a heartwarming greeting card for a personal touch",
                    ].map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FOOTER - Fixed at bottom */}
              <div className="flex-shrink-0 bg-white border-t border-gray-200 p-4 sm:p-6 sticky bottom-0 z-10">
                <div className="space-y-3">
                  <Button
                    onClick={() => {
                      setIsModalOpen(false);
                      handleProceedToWalmart();
                    }}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
                  >
                    Buy Now on Walmart
                    <ShoppingCart className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    onClick={() => setIsModalOpen(false)}
                    variant="outline"
                    size="lg"
                    className="w-full py-3 text-sm sm:text-base font-semibold rounded-xl touch-manipulation border-2"
                  >
                    Continue Browsing
                  </Button>
                </div>
              </div>
            </motion.div>
            </DialogPrimitive.Content>
          </DialogPortal>
        </Dialog>

        {/* Sticky CTA for Mobile */}
        <StickyCTA onClick={handleCardClick} />
      </div>

      {/* Enhanced Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Nutritious Snack Box with Breakfast Bars and Delicious Chips | Gift A Snack (42 Count)",
            brand: {
              "@type": "Brand",
              name: "Gift-A-Snack",
            },
            image: productImages,
            description:
              "Nutritious snack box with breakfast bars and delicious chips, perfect for all ages. Comes with attractive packaging and heartwarming greeting card.",
            sku: "GAS-42-NUTRITIOUS",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.6",
              reviewCount: "23",
              bestRating: "5",
              worstRating: "1",
            },
            offers: {
              "@type": "Offer",
              url: walmartUrl,
              priceCurrency: "USD",
              price: salePrice.toString(),
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Walmart",
                url: "https://www.walmart.com",
              },
            },
          }),
        }}
      />
    </>
  );
}
