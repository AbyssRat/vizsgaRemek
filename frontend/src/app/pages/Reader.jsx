import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { useParams, useNavigate } from "react-router";
import { useApp } from "../context/AppContext";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";
import { ChevronLeft, ChevronRight, X, Settings, Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export const Reader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rentedBooks } = useApp();
  const [currentPage, setCurrentPage] = useState(1);
  const [fontSize, setFontSize] = useState("medium");
  const [showSettings, setShowSettings] = useState(false);
  const [location, setLocation] = useState(null);
  const [epubProgress, setEpubProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const book = rentedBooks.find((b) => Number(b.book_id) === Number(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Book not found in your library</h2>
          <Button onClick={() => navigate("/dashboard")}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }
  const bookEpubFile = `http://localhost:3000/api/books/file/${book.file_name}`;
  const totalPages = book.pages;
  const progress = Math.round(epubProgress * 100);

  const fontSizeClasses = {
    small: "text-base md:text-lg",
    medium: "text-lg md:text-xl",
    large: "text-xl md:text-2xl",
  };

  const getPageContent = () => {
    return (
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">
                Könyv betöltése...
              </p>
            </div>
          </div>
        )}

        <div style={{ height: "70vh" }}>
          <ReactReader
            url={bookEpubFile}
            location={location}
            locationChanged={(epubcfi) => {
              setLocation(epubcfi);
            }}
            getRendition={(rendition) => {
              window.rendition = rendition;

              // 👉 EZ jelzi, hogy betöltött
              rendition.on("rendered", () => {
                setLoading(false);
              });

              rendition.on("relocated", (location) => {
                const { displayed, total } = location.start;
                if (displayed && total) {
                  setEpubProgress(displayed / total);
                  setCurrentPage(displayed);
                }
              });

              rendition.themes.default({
                body: {
                  fontSize:
                    fontSize === "small"
                      ? "14px"
                      : fontSize === "medium"
                        ? "18px"
                        : "22px",
                },
              });
            }}
          />
        </div>
      </div>
    );
  };

  const handleNextPage = () => {
    window.rendition?.next();
  };

  const handlePrevPage = () => {
    window.rendition?.prev();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/dashboard")}
                className="flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="hidden sm:block min-w-0">
                <h2
                  className="font-medium truncate"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {book.title}
                </h2>
                <p className="text-sm text-muted-foreground truncate">
                  {book.author}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                Page {currentPage} of {totalPages}
              </span>

              {/* Settings Menu - Desktop */}
              <div className="hidden md:block">
                <Sheet open={showSettings} onOpenChange={setShowSettings}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Settings className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Reading Settings</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-6 mt-6">
                      <div>
                        <Label className="text-sm mb-2 block">Font Size</Label>
                        <Select value={fontSize} onValueChange={setFontSize}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Settings Menu - Mobile */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[300px]">
                    <SheetHeader>
                      <SheetTitle>Settings</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-4 mt-6">
                      <div>
                        <Label className="text-sm mb-2 block">Font Size</Label>
                        <Select value={fontSize} onValueChange={setFontSize}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Area */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 md:py-20">
          <div
            className={`${fontSizeClasses[fontSize]} leading-relaxed text-foreground whitespace-pre-wrap`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {
              <>
                {/* Reader */}
                <div className="relative">
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
                        <p className="text-sm text-muted-foreground">
                          Könyv betöltése...
                        </p>
                      </div>
                    </div>
                  )}

                  <div style={{ height: "70vh" }}>
                    <ReactReader
                      url={bookEpubFile}
                      location={location}
                      locationChanged={(epubcfi) => {
                        setLocation(epubcfi);
                      }}
                      getRendition={(rendition) => {
                        window.rendition = rendition;

                        rendition.on("rendered", () => {
                          setLoading(false);
                        });

                        rendition.on("relocated", (location) => {
                          const { displayed, total } = location.start;
                          if (displayed && total) {
                            setEpubProgress(displayed / total);
                            setCurrentPage(displayed);
                          }
                        });

                        rendition.themes.default({
                          body: {
                            fontSize:
                              fontSize === "small"
                                ? "14px"
                                : fontSize === "medium"
                                  ? "18px"
                                  : "22px",
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Progress Bar */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Slider
              value={[currentPage]}
              min={1}
              max={totalPages}
              step={1}
              onValueChange={([value]) => {
                if (window.rendition) {
                  const percentage = value / totalPages;
                  window.rendition.display(
                    window.rendition.book.locations.cfiFromPercentage(
                      percentage,
                    ),
                  );
                }
              }}
              className="cursor-pointer"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <Button
              variant="outline"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex-1 sm:flex-initial text-sm sm:text-base"
              size="sm"
            >
              <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">Previous</span>
              <span className="xs:hidden">Prev</span>
            </Button>

            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              {currentPage} / {totalPages}
            </span>

            <Button
              variant="default"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex-1 sm:flex-initial text-sm sm:text-base"
              size="sm"
            >
              <span className="hidden xs:inline">Next</span>
              <span className="xs:hidden">Next</span>
              <ChevronRight className="w-4 h-4 ml-1 sm:ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Label({ children, className }) {
  return <label className={className}>{children}</label>;
}
