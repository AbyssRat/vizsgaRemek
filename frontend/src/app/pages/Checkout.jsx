import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { toast } from 'sonner';

export const Checkout = () => {
  const navigate = useNavigate();
  const { user, cart, checkout } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('card');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.book.price * item.rentalDays / 7), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    checkout();
    toast.success('Rental successful! Books added to your library.');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl mb-8 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Billing & Payment */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing Information */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>Billing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={user.email}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required className="mt-1" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" required className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        Credit / Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-border rounded-lg">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        PayPal
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Books */}
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.book.id} className="flex gap-3">
                        <img
                          src={item.book.cover}
                          alt={item.book.title}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.book.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.rentalDays / 7} week{item.rentalDays / 7 !== 1 ? 's' : ''}
                          </p>
                        </div>
                        <div className="text-sm font-medium">
                          ${(item.book.price * item.rentalDays / 7).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-border"></div>

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
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
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Complete Rental
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By completing this rental, you agree to our Terms of Service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};