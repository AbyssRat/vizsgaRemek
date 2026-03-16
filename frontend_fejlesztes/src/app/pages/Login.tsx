import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen } from 'lucide-react';
import { toast } from 'sonner';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, user } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (login(email, password)) {
      toast.success('Welcome back!');
      // Redirect based on user role - check after login sets the user
      setTimeout(() => {
        // Re-check user state after login
        const isAdminLogin = email === 'admin@library.com' && password === 'admin123';
        if (isAdminLogin) {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      }, 0);
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-accent" />
              <span className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-serif)' }}>
                Our E-books
              </span>
            </div>
          </div>
          <CardTitle className="text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Welcome Back
          </CardTitle>
          <CardDescription>Sign in to your account to continue reading</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Sign In
            </Button>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="text-accent hover:underline">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-6 p-3 bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground text-center mb-2">Demo Credentials:</p>
              <p className="text-xs text-center">
                <strong>Admin:</strong> admin@library.com / admin123
                <br />
                <strong>User:</strong> Any email / any password
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};