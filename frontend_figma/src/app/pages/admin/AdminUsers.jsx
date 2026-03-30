import { useApp } from '../../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Ban, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export const AdminUsers = () => {
  // Mock user data
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active', rentals: 3, joined: '2026-01-15' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'active', rentals: 7, joined: '2026-02-03' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'suspended', rentals: 0, joined: '2025-12-20' },
    { id: '4', name: 'Alice Williams', email: 'alice@example.com', status: 'active', rentals: 2, joined: '2026-03-01' },
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
          <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>All Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Active Rentals</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.rentals}</TableCell>
                    <TableCell>{new Date(user.joined).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      {user.status === 'active' ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toast.info('User suspended')}
                        >
                          <Ban className="w-4 h-4 mr-1" />
                          Suspend
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toast.success('User activated')}
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Activate
                        </Button>
                      )}
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
