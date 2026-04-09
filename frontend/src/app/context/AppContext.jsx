import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext(undefined);
// RESTAPI elérések
const booksEndpoint = "http://localhost:3000/api/books";
const loginEndpoint = "http://localhost:3000/api/auth/login";
const signupEndpoint = "http://localhost:3000/api/auth/register";
const usersEndpoint = "http://localhost:3000/api/users";
const supportEndpoint = "http://localhost:3000/api/support";
const rentalEndpoint = "http://localhost:3000/api/rentals";
const myrentalsEndpoint = "http://localhost:3000/api/rentals";


export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([]);
  const [rentedBooks, setRentedBooks] = useState([]);
  const [supportMessages, setSupportMessages] = useState([]);
  const [activeBooks, setActiveBooks] = useState([]);
  const [inactiveBooks, setInactiveBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(booksEndpoint);
        setBooks(response.data);
      } catch (error) {
        console.error("Hiba a könyvek lekérésekor:", error);
      }
    };

    fetchBooks();

  }, []);
useEffect(() => {
    if (user) {
      const fetchRentals = async () => {
        try {          const response = await axios.get(
            `${myrentalsEndpoint}/${user.user_id || user.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          setRentedBooks(response.data);
        } catch (error) {
          console.error("Hiba a kölcsönzések lekérésekor:", error);
        }
      };

      fetchRentals();
    }
  }, [user, token]);
  const login = async (email, password) => {
    // Mock login - admin@locale.hu / 1234 for admin access for testing
    if (email === "admin@locale.hu" && password === "1234") {
      setUser({
        id: "admin",
        name: "Administrator",
        email: email,
        isAdmin: true,
      });
      return true;
    }

    try {
      const response = await axios.post(loginEndpoint, {
        email,
        password,
      });

      const newToken = response.data.token;
      setToken(newToken);
      localStorage.setItem("token", newToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

      const userData = response.data.user;
      setUser(userData);

      return true;
    } catch (error) {
      console.error(
        "Hiba bejelentkezéskor:",
        error.response?.data || error.message,
      );
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    setToken(null);
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(signupEndpoint, {
        username: name,
        email: email,
        password: password,
      });

      const userData = response.data.user;
      setUser({
        id: userData.user_id,
        name: userData.username,
        email: userData.email,
        isAdmin: userData.is_admin || false,
        credits: userData.credits || 0,
      });

      return true;
    } catch (error) {
      console.error(
        "Hiba regisztrációkor:",
        error.response?.data || error.message,
      );
      return false;
    }
  };

  const addToCart = (book, rentalDays) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id ? { ...item, rentalDays } : item,
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

  const checkout = async () => {
    if (!user || !token) return;
console.log("Starting checkout with cart:", cart);
    try {
      // items tömb felépítése
      const items = cart.map((item) => ({
        userId: user.user_id || user.id,
        book_id: item.book.book_id,
        startDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD
        rental_days: item.rentalDays,
        credit_spent: item.book.price * (item.rentalDays / 7),
      }));

      // EGY kérés
      await axios.post(
        rentalEndpoint,
        { items },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // frontend frissítés
      const newRentedBooks = cart.map((item) => ({
        ...item.book,
        rentedUntil: new Date(
          Date.now() + item.rentalDays * 24 * 60 * 60 * 1000,
        ),
        progress: 0,
      }));

      setRentedBooks((prev) => [...prev, ...newRentedBooks]);

      clearCart();

      console.log("Checkout sikeres!");
    } catch (error) {
      console.error("Checkout hiba:", error.response?.data || error.message);
    }
  };

  const sendMessage = (text) => {
    if (!user) return;

    const existingMessage = supportMessages.find(
      (msg) => msg.userId === user.id,
    );

    if (existingMessage) {
      setSupportMessages((prev) =>
        prev.map((msg) =>
          msg.userId === user.id
            ? {
                ...msg,
                messages: [
                  ...msg.messages,
                  { sender: "user", text, timestamp: new Date() },
                ],
                status: "open",
              }
            : msg,
        ),
      );
    } else {
      setSupportMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          userId: user.id,
          userName: user.name,
          userEmail: user.email,
          messages: [{ sender: "user", text, timestamp: new Date() }],
          status: "open",
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
                { sender: "admin", text, timestamp: new Date() },
              ],
            }
          : msg,
      ),
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
        allBooks: books,
        supportMessages,
        sendMessage,
        replyToMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
