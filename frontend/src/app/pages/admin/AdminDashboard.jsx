import React from 'react';
import { Link } from 'react-router';
import { useApp } from '../../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BookOpen, Users, MessageCircle, TrendingUp } from 'lucide-react';

export const AdminDashboard = () => {
  const { allBooks, supportMessages } = useApp();

  const openMessages = supportMessages.filter((msg) => msg.status === 'open').length;

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl mb-2 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Dashboard
        </h1>
        <p className="text-muted-foreground">Welcome to the admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Books
            </CardTitle>
            <BookOpen className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              {allBooks.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Users
            </CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              42
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Open Support Tickets
            </CardTitle>
            <MessageCircle className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              {openMessages}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Revenue
            </CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              $2,847
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <Link to="/admin/books">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Manage Books
              </h3>
              <p className="text-sm text-muted-foreground">
                Add, edit, or remove books from the library
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/users">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Manage Users
              </h3>
              <p className="text-sm text-muted-foreground">
                View and manage user accounts
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/support">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                Support Messages
              </h3>
              <p className="text-sm text-muted-foreground">
                Respond to customer inquiries
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};