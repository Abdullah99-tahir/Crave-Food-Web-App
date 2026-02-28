/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ShoppingBag, Search, Star, Clock, ChevronLeft, Plus, Minus, Trash2, MapPin, X, Facebook, Instagram, Twitter, Mail, ArrowUp } from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';
import { restaurants, Restaurant, MenuItem } from './data';

interface CartItem extends MenuItem {
  quantity: number;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'restaurant' | 'checkout' | 'success'>('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Checkout form state
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'card'
  });

  const categories = ['All', 'Burgers', 'Pizza', 'Sushi', 'Italian', 'Asian', 'Fast Food', 'Healthy', 'Mexican'];

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(r => {
      const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || r.categories.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const addToCart = (item: MenuItem, restaurantId: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setActiveTab('restaurant');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveTab('home');
    setSelectedRestaurant(null);
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setActiveTab('checkout');
    window.scrollTo(0, 0);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the order to a server
    setActiveTab('success');
    window.scrollTo(0, 0);
  };

  const handleReturnHome = () => {
    setCart([]);
    setSelectedRestaurant(null);
    setActiveTab('home');
    setCheckoutForm({ name: '', address: '', phone: '', paymentMethod: 'card' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-900 border-b  shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
            <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="font-bold text-xl tracking-tight text-orange-500">Crave Food</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 bg-black-100 px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>Delivering to: <span className="text-white">Gujranwala</span></span>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-300 hover:bg-orange-500 rounded-full transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Hero / Search */}
              <div className="bg-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    Hungry? We've got you covered.
                  </h1>
                  <p className="text-orange-100 text-lg mb-8">
                    Order from your favorite restaurants and get it delivered to your door.
                  </p>
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for restaurants or cuisines..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-sm text-lg"
                    />
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M45.7,-76.1C58.9,-69.3,69.2,-55.4,76.6,-40.8C84,-26.2,88.5,-10.9,86.8,3.8C85.1,18.5,77.2,32.6,67.1,44.1C57,55.6,44.7,64.5,30.8,71.1C16.9,77.7,1.4,82,-13.6,80.1C-28.6,78.2,-43.1,70.1,-55.1,59.2C-67.1,48.3,-76.6,34.6,-81.9,19.3C-87.2,4,-88.3,-12.9,-82.5,-27.5C-76.7,-42.1,-64,-54.4,-50.1,-61.1C-36.2,-67.8,-21.1,-68.9,-5.3,-62.5C10.5,-56.1,21,-42.2,32.5,-82.8Z" transform="translate(100 100)" />
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-orange-700">Categories</h2>
                <div className="flex overflow-x-auto pb-4 gap-3 hide-scrollbar">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors ${selectedCategory === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-orange-500 text-white hover:bg-orange-700 '
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Restaurant Grid */}
              <div>
                <h2 className="text-xl font-bold mb-6 text-orange-700">
                  {searchQuery ? 'Search Results' : 'Popular Near You'}
                </h2>
                {filteredRestaurants.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    No restaurants found matching your criteria.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRestaurants.map(restaurant => (
                      <motion.div
                        key={restaurant.id}
                        whileHover={{ y: -4 }}
                        onClick={() => handleRestaurantClick(restaurant)}
                        className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-sm border border-orange-700 cursor-pointer hover:shadow-md transition-shadow hover:bg-orange-500"
                      >
                        <div className="relative h-48 ">
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 right-4 bg-orange-500 px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1 shadow-sm">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {restaurant.rating}
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold">{restaurant.name}</h3>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-200 mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {restaurant.deliveryTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              ${restaurant.deliveryFee} delivery
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.categories.slice(0, 3).map(cat => (
                              <span key={cat} className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ) : selectedRestaurant ? (
            <motion.div
              key="restaurant"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-orange-500 hover:text-orange-700 font-medium transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to restaurants
              </button>

              <div className="bg-black rounded-3xl overflow-hidden shadow-sm border border-orange-500">
                <div className="h-64 relative">
                  <img
                    src={selectedRestaurant.image}
                    alt={selectedRestaurant.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h1 className="text-4xl font-bold mb-2">{selectedRestaurant.name}</h1>
                    <div className="flex items-center gap-4 text-sm font-medium">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        {selectedRestaurant.rating} Rating
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedRestaurant.deliveryTime}
                      </div>
                      <div>${selectedRestaurant.deliveryFee} delivery fee</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-orange-500">Menu</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedRestaurant.menu.map(item => (
                      <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-orange-900 hover:shadow-sm transition-all bg-orange-500 group text-white">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1 ">{item.name}</h3>
                          <p className="text-gray-200 text-sm mb-3 line-clamp-2">{item.description}</p>
                          <div className="font-bold text-white">${item.price.toFixed(2)}</div>
                        </div>
                        <div className="relative w-28 h-28 shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-xl"
                            referrerPolicy="no-referrer"
                          />
                          <button
                            onClick={() => addToCart(item, selectedRestaurant.id)}
                            className="absolute -bottom-2 -right-2 bg-white text-orange-500 hover:bg-black hover:text-white p-2 rounded-full shadow-md border border-gray-100 transition-colors"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'checkout' ? (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <button
                onClick={() => setActiveTab('restaurant')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to menu
              </button>

              <div className="bg-gray-900 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-orange-500">Checkout</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Order Summary */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-orange-500">Order Summary</h3>
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center text-white">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-white">{item.quantity}x</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="font-medium text-white">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-100 pt-4 space-y-2">
                      <div className="flex justify-between text-gray-200">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-200">
                        <span>Delivery Fee</span>
                        <span>${selectedRestaurant?.deliveryFee.toFixed(2) || '0.00'}</span>
                      </div>
                      <div className="flex justify-between font-bold text-xl pt-2 text-white">
                        <span>Total</span>
                        <span>${(cartTotal + (selectedRestaurant?.deliveryFee || 0)).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Details */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-orange-500">Delivery Details</h3>
                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={checkoutForm.name}
                          onChange={e => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">Delivery Address</label>
                        <textarea
                          required
                          value={checkoutForm.address}
                          onChange={e => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                          placeholder="123 Main St, Apt 4B"
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={checkoutForm.phone}
                          onChange={e => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="pt-4">
                        <h3 className="text-lg font-bold mb-4 text-orange-500">Payment Method</h3>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-orange-500 text-white">
                            <input
                              type="radio"
                              name="payment"
                              value="card"
                              checked={checkoutForm.paymentMethod === 'card'}
                              onChange={e => setCheckoutForm({ ...checkoutForm, paymentMethod: e.target.value })}
                              className="text-orange-500 focus:ring-orange-500"
                            />
                            <span className="font-medium">Credit / Debit Card</span>
                          </label>
                          <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-orange-500 text-white">
                            <input
                              type="radio"
                              name="payment"
                              value="paypal"
                              checked={checkoutForm.paymentMethod === 'paypal'}
                              onChange={e => setCheckoutForm({ ...checkoutForm, paymentMethod: e.target.value })}
                              className="text-orange-500 focus:ring-orange-500"
                            />
                            <span className="font-medium">PayPal</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-sm mt-6"
                      >
                        Place Order • ${(cartTotal + (selectedRestaurant?.deliveryFee || 0)).toFixed(2)}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center py-12"
            >
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-orange-500">Order Placed!</h2>
              <p className="text-gray-200 mb-8 text-lg">
                Your order from {selectedRestaurant?.name} is being prepared and will be delivered to {checkoutForm.address} soon.
              </p>
              <button
                onClick={handleReturnHome}
                className="bg-gray-800 text-white font-bold py-3 px-8 rounded-xl hover:bg-orange-500 transition-colors"
              >
                Return Home
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      {/* Professional Footer */}
      <footer className="bg-black text-gray-300 border-t border-orange-900 mt-20 relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <span className="font-bold text-2xl text-orange-500">
                  Crave Food
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Delivering happiness to your doorstep.
                Discover top restaurants and enjoy fast delivery anytime.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <div className="p-2 bg-gray-900 hover:bg-orange-500 rounded-full cursor-pointer transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="p-2 bg-gray-900 hover:bg-orange-500 rounded-full cursor-pointer transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="p-2 bg-gray-900 hover:bg-orange-500 rounded-full cursor-pointer transition-colors">
                  <Twitter className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-5">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Home</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Restaurants</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Categories</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Checkout</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold mb-5">Support</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Terms & Conditions</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold mb-5">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to get latest offers & updates.
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-xl bg-gray-900 border border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 px-4 rounded-r-xl hover:bg-orange-600 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">

            <p>
              © {new Date().getFullYear()} Crave Food. All rights reserved.
            </p>

            <div className="flex gap-6">
              <span className="hover:text-orange-500 cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-orange-500 cursor-pointer transition-colors">Terms</span>
            </div>

          </div>

        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </footer>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Your Order
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                    <ShoppingBag className="w-16 h-16 text-gray-300" />
                    <p className="text-lg font-medium">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-orange-500 font-medium hover:underline"
                    >
                      Browse restaurants
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                          <div className="text-orange-500 font-bold text-sm mb-2">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-600 transition-colors"
                            >
                              {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                            </button>
                            <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-600 transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>Delivery Fee</span>
                      <span>${selectedRestaurant?.deliveryFee.toFixed(2) || '0.00'}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>${(cartTotal + (selectedRestaurant?.deliveryFee || 0)).toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-sm"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
