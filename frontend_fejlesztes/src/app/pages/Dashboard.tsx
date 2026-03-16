import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { BookOpen, Calendar, Clock, DollarSign, LogOut, User } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, rentedBooks, logout } = useApp();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getDaysRemaining = (expiryDate: Date) => {
    const now = new Date();
    const diff = expiryDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const calculateTotalSpent = () => {
    return rentedBooks.reduce((total, book) => total + book.price, 0);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Account Info */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                My Library
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">Welcome back, {user.name}</p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="w-full sm:w-auto">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Account Info Card */}
          <Card className="mb-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent">
                  <User className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                    Account Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name: </span>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email: </span>
                      <span className="font-medium">{user.email}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Member Since: </span>
                      <span className="font-medium">March 2026</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Account Type: </span>
                      <span className="font-medium">Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Currently Renting</CardTitle>
              <BookOpen className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                {rentedBooks.length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Active rentals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Books Completed</CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                {rentedBooks.filter(b => b.progress === 100).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Finished reading</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                {rentedBooks.filter(b => b.progress > 0 && b.progress < 100).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Currently reading</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
                ${calculateTotalSpent().toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">On current rentals</p>
            </CardContent>
          </Card>
        </div>

        {/* Rented Books */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl sm:text-2xl md:text-3xl text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Your Books
            </h2>
            <Link to="/browse">
              <Button variant="outline" className="w-full sm:w-auto">Browse More Books</Button>
            </Link>
          </div>

          {rentedBooks.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  No Books Rented Yet
                </h3>
                <p className="text-muted-foreground mb-6">
                  Start your reading journey by browsing our curated collection.
                </p>
                <Link to="/browse">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Browse Books
                  </Button>
                </Link>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentedBooks.map((book) => {
                const daysRemaining = getDaysRemaining(book.rentedUntil);
                const isExpiring = daysRemaining <= 3;

                return (
                  <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary relative">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      {book.progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-2">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{book.progress}%</span>
                          </div>
                          <Progress value={book.progress} className="h-1" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3
                        className="font-medium text-foreground mb-1 line-clamp-1"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{book.author}</p>

                      <div className="flex items-center justify-between mb-3 text-xs">
                        <span className={`${isExpiring ? 'text-destructive' : 'text-muted-foreground'}`}>
                          {daysRemaining > 0 ? (
                            <>
                              {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} left
                            </>
                          ) : (
                            'Rental expired'
                          )}
                        </span>
                        <span className="text-muted-foreground">
                          ${book.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="text-xs text-muted-foreground mb-3">
                        Expires: {formatDate(book.rentedUntil)}
                      </div>

                      <Link to={`/reader/${book.id}`}>
                        <Button className="w-full" variant={daysRemaining === 0 ? 'outline' : 'default'}>
                          {daysRemaining === 0 ? 'Rental Expired' : book.progress > 0 ? 'Continue Reading' : 'Start Reading'}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};