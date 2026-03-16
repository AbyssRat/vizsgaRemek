import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useApp();

  const subtotal = cart.reduce((sum, item) => sum + (item.book.price * item.rentalDays / 7), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl mb-8 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Your Cart is Empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Discover our collection and add some books to your cart.
              </p>
              <Link to="/browse">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Browse Books
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.book.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.book.cover}
                        alt={item.book.title}
                        className="w-24 h-32 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3
                          className="text-lg font-medium mb-1"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {item.book.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.book.author}</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Rental period: {item.rentalDays} days ({item.rentalDays / 7} week
                          {item.rentalDays / 7 !== 1 ? 's' : ''})
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-accent" style={{ fontFamily: 'var(--font-serif)' }}>
                            ${(item.book.price * item.rentalDays / 7).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              removeFromCart(item.book.id);
                              toast.success('Book removed from cart');
                            }}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-border"></div>
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-accent" style={{ fontFamily: 'var(--font-serif)' }}>
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-3"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>

                  <Link to="/browse">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
