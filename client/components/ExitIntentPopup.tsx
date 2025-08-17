import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Mail, ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExitIntentPopupProps {
  onClose: () => void;
  onClaimOffer: (email?: string) => void;
}

export function ExitIntentPopup({ onClose, onClaimOffer }: ExitIntentPopupProps) {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Email validation
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  // Format time display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleClaimOffer = () => {
    if (email.trim()) {
      onClaimOffer(email);
    } else {
      onClaimOffer();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Popup Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close popup"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          {/* Header with Urgency Badge */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 pb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                WAIT! Don't Miss Out
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Get 10% OFF + FREE Shipping!
            </h2>
            
            <p className="text-red-100 text-center text-sm">
              Exclusive offer expires soon!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-red-50 border-b border-red-100 px-6 py-4">
            <div className="flex items-center justify-center gap-2 text-red-700">
              <Clock className="h-5 w-5" />
              <span className="text-lg font-bold">
                Time Left: {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {/* Offer Details */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-2">
                  Save $3.20 + FREE Shipping
                </div>
                <div className="text-sm text-green-600">
                  ✓ 10% discount on your order<br />
                  ✓ Free shipping (normally $5.99)<br />
                  ✓ Same premium quality snacks
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Enter your email to claim this offer:
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              {email && !isEmailValid && (
                <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleClaimOffer}
                disabled={email && !isEmailValid}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Get My Discount Now
              </Button>
              
              <button
                onClick={onClose}
                className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium py-2 transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                <span>🔒 Secure Checkout</span>
                <span>���� No Spam</span>
                <span>⚡ Instant Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
