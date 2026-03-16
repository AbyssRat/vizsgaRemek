import React from 'react';
import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { BookCard } from '../components/BookCard';
import { Button } from '../components/ui/button';
import { BookOpen, Clock, Shield, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  const { allBooks, user } = useApp();
  const featuredBooks = allBooks.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl mb-6 text-primary"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              A Library for the Discerning Reader
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover timeless literature and contemporary masterpieces. Rent books by the week and
              immerse yourself in the written word.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Collection
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl text-center mb-12 text-primary"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The Art of Reading, Reimagined
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Curated Collection
              </h3>
              <p className="text-muted-foreground">
                Every title thoughtfully selected for literary merit and enduring value.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Flexible Rentals
              </h3>
              <p className="text-muted-foreground">
                Rent by the week and read at your own pace, without commitment.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Premium Experience
              </h3>
              <p className="text-muted-foreground">
                Distraction-free reading interface designed for comfort and focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Featured Collection
            </h2>
            <Link to="/browse">
              <Button variant="ghost" className="text-accent hover:text-accent/80">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Only show if user is not logged in */}
      {!user && (
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl mb-6 text-primary"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Begin Your Literary Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of readers and access hundreds of carefully selected titles.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Create Free Account
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Logged-in CTA Section */}
      {user && !user.isAdmin && (
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl mb-6 text-primary"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Continue Your Reading Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore your library or discover new titles from our curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Go to My Library
                </Button>
              </Link>
              <Link to="/browse">
                <Button size="lg" variant="outline">
                  Browse More Books
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};