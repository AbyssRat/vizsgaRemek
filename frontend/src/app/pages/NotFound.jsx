import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { BookOpen } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <BookOpen className="w-20 h-20 mx-auto mb-6 text-accent opacity-50" />
        <h1 className="text-6xl font-semibold mb-4 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          404
        </h1>
        <h2 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for seems to have wandered off into the literary abyss.
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
