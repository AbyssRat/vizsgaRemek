import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Eye, Ban, Shield } from 'lucide-react';
import { toast } from 'sonner';

export const AdminUsers = () => {
  // Mock user data
  const users = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      joinDate: '2026-01-15',
      rentedBooks: 5,
      status: 'active',
      isAdmin: false,
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob@example.com',
      joinDate: '2026-02-03',
      rentedBooks: 2,
      status: 'active',
      isAdmin: false,
    },
    {
      id: '3',
      name: 'Carol Williams',
      email: 'carol@example.com',
      joinDate: '2025-12-10',
      rentedBooks: 12,
      status: 'active',
      isAdmin: false,
    },
    {
      id: 'admin',
      name: 'Administrator',
      email: 'admin@library.com',
      joinDate: '2025-11-01',
      rentedBooks: 0,
      status: 'active',
      isAdmin: true,
    },
  ];

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl mb-2 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Manage Users
        </h1>
        <p className="text-muted-foreground">View and manage user accounts</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Rented Books</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>{user.rentedBooks}</TableCell>
                    <TableCell>
                      {user.isAdmin ? (
                        <Badge variant="default" className="bg-accent text-accent-foreground">
                          <Shield className="w-3 h-3 mr-1" />
                          Admin
                        </Badge>
                      ) : (
                        <Badge variant="secondary">User</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === 'active' ? 'default' : 'destructive'}
                        className={user.status === 'active' ? 'bg-green-600' : ''}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toast.info('View user details')}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {!user.isAdmin && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toast.success('User status updated')}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <Ban className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};