import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import { toast } from 'sonner';

export const AdminBooks = () => {
  const { allBooks } = useApp();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddBook = (e) => {
    e.preventDefault();
    toast.success('Book added successfully!');
    setIsAddDialogOpen(false);
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl mb-2 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Manage Books
          </h1>
          <p className="text-muted-foreground">Add, edit, or remove books from the library</p>
        </div>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Book
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle style={{ fontFamily: 'var(--font-serif)' }}>Add New Book</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddBook} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" required className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="w-full min-h-[100px] px-3 py-2 border border-border rounded-md bg-background mt-1"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="genre">Genres (comma-separated)</Label>
                  <Input id="genre" placeholder="Fiction, Mystery" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="coverUrl">Cover Image URL</Label>
                  <Input id="coverUrl" type="url" required className="mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price">Price per Week</Label>
                  <Input id="price" type="number" step="0.01" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="pages">Pages</Label>
                  <Input id="pages" type="number" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Input id="rating" type="number" step="0.1" min="0" max="5" required className="mt-1" />
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Add Book
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>All Books ({allBooks.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cover</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Genre</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>
                      <img src={book.cover} alt={book.title} className="w-12 h-16 object-cover rounded" />
                    </TableCell>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.genre.join(', ')}</TableCell>
                    <TableCell>${book.price}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span>{book.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toast.info('Edit functionality')}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive"
                          onClick={() => toast.info('Delete functionality')}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
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
