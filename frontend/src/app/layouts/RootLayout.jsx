import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { SupportChat } from '../components/SupportChat';
import { useApp } from '../context/AppContext';

export const RootLayout = () => {
  const { user } = useApp();

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-sans)' }}>
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-card border-t border-border py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-lg mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Our E-books
              </h3>
              <p className="text-sm text-muted-foreground">
                Your gateway to timeless literature and intellectual exploration.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/browse" className="hover:text-accent transition-colors">
                    Browse Books
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/legal" className="hover:text-accent transition-colors">
                    Terms & Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Email: hello@ourebooks.com
                <br />
                Support available 9am - 6pm EST
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 Our E-books. All rights reserved.
          </div>
        </div>
      </footer>
      {user && !user.isAdmin && <SupportChat />}
    </div>
  );
};
