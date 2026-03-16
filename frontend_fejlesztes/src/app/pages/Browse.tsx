import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { BookCard } from '../components/BookCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search } from 'lucide-react';

export const Browse: React.FC = () => {
  const { allBooks } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('title');

  // Get all unique genres
  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    allBooks.forEach((book) => {
      book.genre.forEach((g) => genres.add(g));
    });
    return Array.from(genres).sort();
  }, [allBooks]);

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = allBooks;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Genre filter
    if (genreFilter !== 'all') {
      filtered = filtered.filter((book) => book.genre.includes(genreFilter));
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return filtered;
  }, [allBooks, searchTerm, genreFilter, sortBy]);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Browse Our Collection
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover your next great read from our curated library.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 bg-card rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Genre Filter */}
            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                {allGenres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Title (A-Z)</SelectItem>
                <SelectItem value="author">Author (A-Z)</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(searchTerm || genreFilter !== 'all') && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchTerm && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSearchTerm('')}
                >
                  Search: "{searchTerm}" ×
                </Button>
              )}
              {genreFilter !== 'all' && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setGenreFilter('all')}
                >
                  Genre: {genreFilter} ×
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
          </p>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No books found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setGenreFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
