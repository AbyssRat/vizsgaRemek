import React from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { BookOpen } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <BookOpen className="w-24 h-24 mx-auto text-muted-foreground opacity-50" />
        </div>
        <h1 className="text-6xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          404
        </h1>
        <h2 className="text-2xl mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off. Let's get you back to familiar
          territory.
        </p>
        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
