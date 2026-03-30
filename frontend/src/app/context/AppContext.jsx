import { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// Mock book data
const mockBooks = [
  {
    id: '1',
    title: 'The Art of Elegance',
    author: 'Charlotte Beaumont',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
    description: 'A timeless exploration of refined living and classical aesthetics in the modern age.',
    genre: ['Art', 'Lifestyle'],
    price: 4.99,
    rating: 4.8,
    pages: 342,
    previewPage: 'In the quiet morning light, elegance reveals itself not through ostentation...'
  },
  {
    id: '2',
    title: 'Seasons of Remembrance',
    author: 'Edward Thornfield',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    description: 'A reflective journey through memory, nature, and the passage of time.',
    genre: ['Fiction', 'Literary'],
    price: 5.99,
    rating: 4.6,
    pages: 428,
    previewPage: 'The autumn leaves fell silently, each one a memory descending...'
  },
  {
    id: '3',
    title: 'Classical Wisdom',
    author: 'Margaret St. Claire',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    description: 'Ancient philosophy reimagined for contemporary seekers of knowledge and virtue.',
    genre: ['Philosophy', 'Non-Fiction'],
    price: 6.99,
    rating: 4.9,
    pages: 512,
    previewPage: 'The ancients understood what we have forgotten: that wisdom begins in silence...'
  },
  {
    id: '4',
    title: 'The Manor House',
    author: 'Victoria Ashford',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    description: 'A Gothic tale of family legacy, hidden secrets, and enduring traditions.',
    genre: ['Gothic', 'Mystery'],
    price: 4.99,
    rating: 4.7,
    pages: 386,
    previewPage: 'The manor stood as it always had, watching over the valley with patient eyes...'
  },
  {
    id: '5',
    title: 'Letters from Abroad',
    author: 'Henry Westbrook',
    cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400',
    description: 'Correspondence between two scholars across continents and decades.',
    genre: ['Epistolary', 'History'],
    price: 5.49,
    rating: 4.5,
    pages: 294,
    previewPage: 'My dear friend, it has been three months since I last wrote from Florence...'
  },
  {
    id: '6',
    title: 'Gardens of Contemplation',
    author: 'Lillian Hartwell',
    cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
    description: 'Essays on gardening as meditation and the cultivation of inner peace.',
    genre: ['Nature', 'Philosophy'],
    price: 4.49,
    rating: 4.8,
    pages: 268,
    previewPage: 'A garden is more than soil and seed; it is a conversation with time...'
  },
  {
    id: '7',
    title: 'The Portrait',
    author: 'Sebastian Marlowe',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400',
    description: 'An art historian uncovers the truth behind a mysterious Renaissance painting.',
    genre: ['Mystery', 'Art'],
    price: 5.99,
    rating: 4.6,
    pages: 356,
    previewPage: 'The eyes in the portrait seemed to follow her across the gallery...'
  },
  {
    id: '8',
    title: 'Echoes of Vienna',
    author: 'Anna Kensington',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400',
    description: 'A musical journey through the golden age of classical composition.',
    genre: ['Music', 'Historical'],
    price: 6.49,
    rating: 4.7,
    pages: 412,
    previewPage: 'The concert hall fell silent as the maestro raised his baton...'
  },
];

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  // Initialize with demo rented books for testing
  const [rentedBooks, setRentedBooks] = useState([
    {
      ...mockBooks[0], // The Art of Elegance
      rentedUntil: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      progress: 35,
    },
    {
      ...mockBooks[2], // Classical Wisdom
      rentedUntil: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
      progress: 0,
    },
    {
      ...mockBooks[4], // Letters from Abroad
      rentedUntil: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      progress: 78,
    },
  ]);
  const [supportMessages, setSupportMessages] = useState([]);

  const login = (email, password) => {
    // Mock login - admin@library.com / admin123 for admin access
    if (email === 'admin@library.com' && password === 'admin123') {
      setUser({
        id: 'admin',
        name: 'Administrator',
        email: email,
        isAdmin: true,
      });
      return true;
    }
    
    // Regular user login
    if (email && password) {
      setUser({
        id: '1',
        name: email.split('@')[0],
        email: email,
        isAdmin: false,
      });
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (name, email, password) => {
    if (name && email && password) {
      setUser({
        id: Date.now().toString(),
        name,
        email,
        isAdmin: false,
      });
      return true;
    }
    return false;
  };

  const addToCart = (book, rentalDays) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id ? { ...item, rentalDays } : item
        );
      }
      return [...prev, { book, rentalDays }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    const newRentedBooks = cart.map((item) => ({
      ...item.book,
      rentedUntil: new Date(Date.now() + item.rentalDays * 24 * 60 * 60 * 1000),
      progress: 0,
    }));
    
    setRentedBooks((prev) => [...prev, ...newRentedBooks]);
    clearCart();
  };

  const sendMessage = (text) => {
    if (!user) return;

    const existingMessage = supportMessages.find((msg) => msg.userId === user.id);

    if (existingMessage) {
      setSupportMessages((prev) =>
        prev.map((msg) =>
          msg.userId === user.id
            ? {
                ...msg,
                messages: [
                  ...msg.messages,
                  { sender: 'user', text, timestamp: new Date() },
                ],
                status: 'open',
              }
            : msg
        )
      );
    } else {
      setSupportMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          userId: user.id,
          userName: user.name,
          userEmail: user.email,
          messages: [{ sender: 'user', text, timestamp: new Date() }],
          status: 'open',
        },
      ]);
    }
  };

  const replyToMessage = (messageId, text) => {
    setSupportMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              messages: [
                ...msg.messages,
                { sender: 'admin', text, timestamp: new Date() },
              ],
            }
          : msg
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        rentedBooks,
        checkout,
        allBooks: mockBooks,
        supportMessages,
        sendMessage,
        replyToMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
