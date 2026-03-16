import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Star, ShoppingCart, Eye, ArrowLeft, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

export const BookDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allBooks, user, addToCart } = useApp();
  const [rentalDays, setRentalDays] = useState('7');
  const [showPreview, setShowPreview] = useState(false);

  const book = allBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Book not found</h2>
          <Link to="/browse">
            <Button>Browse Books</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book, parseInt(rentalDays));
    toast.success('Book added to cart!');
  };

  const handleRentNow = () => {
    addToCart(book, parseInt(rentalDays));
    navigate('/cart');
  };

  const rentalPrice = (book.price * (parseInt(rentalDays) / 7)).toFixed(2);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Book Details */}
          <div>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-3">
                {book.genre.map((genre) => (
                  <span
                    key={genre}
                    className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <h1
                className="text-4xl md:text-5xl mb-3 text-primary"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {book.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-medium">{book.rating}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{book.pages} pages</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </div>

            {/* Rental Options */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-lg mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                  Rental Options
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Rental Period</label>
                    <Select value={rentalDays} onValueChange={setRentalDays}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">1 Week - ${book.price}</SelectItem>
                        <SelectItem value="14">2 Weeks - ${(book.price * 2).toFixed(2)}</SelectItem>
                        <SelectItem value="21">3 Weeks - ${(book.price * 3).toFixed(2)}</SelectItem>
                        <SelectItem value="28">4 Weeks - ${(book.price * 4).toFixed(2)}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg">Total</span>
                      <span className="text-2xl font-semibold text-accent" style={{ fontFamily: 'var(--font-serif)' }}>
                        ${rentalPrice}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        onClick={handleAddToCart}
                        className="w-full"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        onClick={handleRentNow}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Rent Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview Button */}
            {user && book.previewPage && (
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setShowPreview(true)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview First Page
              </Button>
            )}

            {!user && (
              <div className="p-4 bg-secondary rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Sign in to preview the first page
                </p>
                <Link to="/login">
                  <Button size="sm" variant="outline">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Preview Dialog */}
        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle style={{ fontFamily: 'var(--font-serif)' }}>
                Preview: {book.title}
              </DialogTitle>
            </DialogHeader>
            <div className="py-6">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
                  {book.previewPage}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border text-center text-muted-foreground">
                <p className="text-sm">End of preview</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
