import React from 'react';
import { Link } from 'react-router';
import { Book } from '../context/AppContext';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full border-border">
        <div className="aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-4">
          <h3
            className="font-medium text-foreground mb-1 line-clamp-2 group-hover:text-accent transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-accent">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{book.rating}</span>
            </div>
            <span className="text-sm font-medium text-foreground">${book.price}/week</span>
          </div>
          {book.genre && book.genre.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {book.genre.slice(0, 2).map((genre) => (
                <span
                  key={genre}
                  className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
