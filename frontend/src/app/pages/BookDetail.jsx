import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { useApp } from "../context/AppContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Star, ShoppingCart, Eye, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

export const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allBooks, user, addToCart } = useApp();
  const [rentalDays, setRentalDays] = useState("7");
  const [showPreview, setShowPreview] = useState(false);
  const book = allBooks.find((b) => b.book_id === Number(id));
  const [details, setDetails] = useState(null);
  const [prewviewUrl, setPreviewUrl] = useState(null);
  useEffect(() => {
    async function fetchBookDetails() {
      if (!book || !book.ISBN) return;

      try {
        // 1. Alapadatok lekérése ISBN alapján
        const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${book.ISBN}&format=json&jscmd=data`;
        const response = await fetch(url);
        const data = await response.json();
        const bookData = data[`ISBN:${book.ISBN}`];

        if (bookData) {
          // Először beállítjuk az alapokat (cím, borító, stb.)
          setDetails(bookData);

          // 2. EXTRA lekérés a leírásért
          // Az Edition adatai között keressük a Work kulcsot
          // Megjegyzés: a jscmd=data válaszában a 'key' néha az Edition-re mutat.
          // Biztosabb, ha lekérjük az Edition teljes JSON-jét, amiben benne van a Work linkje.

          const editionRes = await fetch(
            `https://openlibrary.org${bookData.key}.json`,
          );
          const editionData = await editionRes.json();

          let finalDescription = "No description available.";

          // Ha az Edition-ben van leírás, használjuk azt
          if (editionData.description) {
            finalDescription = editionData.description;
          }
          // Ha nincs, de van Work hivatkozás, kérjük le onnan
          else if (editionData.works && editionData.works.length > 0) {
            const workKey = editionData.works[0].key; // Pl: /works/OL1816500W
            const workRes = await fetch(
              `https://openlibrary.org${workKey}.json`,
            );
            const workData = await workRes.json();

            if (workData.description) {
              finalDescription = workData.description;
            }
          }

          // Frissítjük a state-et a leírással
          setDetails((prev) => ({
            ...prev,
            description: finalDescription,
          }));
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }

    fetchBookDetails();
  }, [book]);

  const previewUrl = details?.ebooks?.[0]?.preview_url;
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Book not found</h2>
          <Link to="/browse">
            <Button>Browse Books</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book, parseInt(rentalDays));
    toast.success("Book added to cart!");
  };

  const handleRentNow = () => {
    addToCart(book, parseInt(rentalDays));
    navigate("/cart");
  };

  const rentalPrice = (book.price * (parseInt(rentalDays) / 7)).toFixed(2);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div>
            {/* TITLE + META (borító fölött) */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">{book.genre}</div>

              <h1
                className="text-4xl md:text-5xl mb-3 text-primary"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {previewUrl ? (
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {book.title}
                  </a>
                ) : (
                  book.title
                )}
              </h1>

              <p className="text-xl text-muted-foreground mb-4">
                by {book.author_name}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {/* Generálunk egy 5 elemű tömböt */}
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <Star
                        key={index}
                        className={`w-5 h-5 ${
                          starValue <= Math.round(book.rating)
                            ? "fill-accent text-accent" // Kitöltött csillag (Arany/Accent szín)
                            : "text-muted-foreground opacity-30" // Üres csillag (Szürke/Áttetsző)
                        }`}
                      />
                    );
                  })}
                  <span className="font-medium ml-2">{book.rating}</span>
                </div>
              </div>
            </div>

            {/* COVER */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="w-full max-w-md">
                <img
                  src={`http://localhost:3000/api/covers/${book.ISBN}`} 
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x450?text=No+Cover";
                  }}
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {details && (
              <div className="text-sm text-muted-foreground space-y-1 mt-4 mb-8">
                {details.publish_date && (
                  <p>Published: {details.publish_date}</p>
                )}
                {details.number_of_pages && (
                  <p>Pages: {details.number_of_pages}</p>
                )}
                {details.publishers && (
                  <p>
                    Publisher:{" "}
                    {details.publishers.map((p) => p.name).join(", ")}
                  </p>
                )}
              </div>
            )}

            {/* DESCRIPTION */}
            <div className="mb-8">
              <h2
                className="text-xl mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {details?.description?.value ||
                  details?.description ||
                  book.description ||
                  "No description available."}
              </p>
            </div>

            {/* RENTAL */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3
                  className="text-lg mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Rental Options
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Rental Period</label>

                    <Select value={rentalDays} onValueChange={setRentalDays}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">
                          1 Week - ${book.price}
                        </SelectItem>
                        <SelectItem value="14">
                          2 Weeks - ${(book.price * 2).toFixed(2)}
                        </SelectItem>
                        <SelectItem value="21">
                          3 Weeks - ${(book.price * 3).toFixed(2)}
                        </SelectItem>
                        <SelectItem value="28">
                          4 Weeks - ${(book.price * 4).toFixed(2)}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg">Total</span>
                      <span className="text-2xl font-semibold text-accent">
                        ${rentalPrice}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" onClick={handleAddToCart}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>

                      <Button onClick={handleRentNow}>Rent Now</Button>
                    </div>
                  </div>
                  {/* PREVIEW BUTTON (OpenLibrary) */}
                  {previewUrl && (
                    <Button
                      variant="outline"
                      className="w-full mb-4"
                      onClick={() => window.open(previewUrl, "_blank")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Read Online Preview
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SAJÁT PREVIEW (modal) */}
            {user && book.previewPage && (
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setShowPreview(true)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview First Page
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* DIALOG */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Preview: {book.title}</DialogTitle>
          </DialogHeader>

          <div className="py-6">
            <p className="text-lg leading-relaxed">{book.previewPage}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
